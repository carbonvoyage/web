import { GetServerSidePropsContext } from 'next';
import CharitySummary from '@components/Transaction/CharitySummary'
import DonationSummary from '@components/Transaction/DonationSummary'
import ItemTable from '@components/Transaction/ItemTable';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Transaction, Charity, Product } from 'types';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  const { id } = ctx.query;
  // Check if we have a session

  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    };

  const { data: transaction_details, error: transactionError } = await supabase
    .from('transactions')
    .select(`*, charities(*)`)
    .eq('id', id).single()



  const { data: product_data, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('transaction_id', id);


  return {
    props: {
      id: id,
      initialSession: session,
      user: session.user,
      transaction_details: transaction_details,
      product_data: product_data,
      charity_data: transaction_details?.charities
    }
  };
};

const Transaction = ({ id, transaction_details, product_data, charity_data } : {
    id: string
    transaction_details: Transaction
    charity_data: Charity
    product_data: Product[]
}
) => {
  return (
    <section className="mx-auto w-full">
       <div className="bg-carbon-bronze py-8">
          <div className='mx-auto max-w-6xl px-6 space-y-2'>
            <h1 className="text-2xl lg:text-4xl text-carbon-gold font-display" >
              Transaction Details
            </h1>
            <p className="text-carbon-gold text-lg lg:text-xl">
              Order #{id}
            </p>
          </div>
        </div>
        <div className='mx-auto flex flex-col lg:flex-row max-w-2xl sm:max-w-6xl gap-8 mb-8 my-8 px-4 lg:px-6'> 
            <div className='w-full lg:w-2/3'>
                <ItemTable product_data={product_data}/>
            </div>
            <div className='flex flex-col gap-y-8 w-full lg:w-1/3 order-first lg:order-last'>
                <CharitySummary charity_data={charity_data}/>
                <DonationSummary transaction_details={transaction_details} />
            </div>
        </div>
    </section>
  );
};

export default Transaction;
