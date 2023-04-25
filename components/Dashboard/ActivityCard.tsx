import Link from 'next/link';

import { useUser } from '@context/useUser';

export default function ActivityCard() {
  const { transactionDetails } = useUser();

  return (
    <div className="bg-carbon-white rounded-b-lg row-span-1 lg:row-span-2 col-span-3 h-fit">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="text-2xl text-carbon-gold">Recent Activity</span>
      </div>
      <div className="flex flex-col">
        {transactionDetails?.map((transaction) => {
          const transactionDate = new Date(transaction.created_at);
          return (
            <div
              className="flex p-5 border-b border-carbon-bronze last:border-b-0 border-opacity-50"
              key={`${transaction.id}`}
            >
              <span className="w-14 mr-5">
                {transactionDate.toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <div className="grid grid-cols-2 w-full">
                <span className="font-display">{transaction.marketplace}</span>
                <span className="font-display justify-self-end">
                  {`$${transaction.total_price}`}
                </span>
                <span className="">{`Donated to ${transaction.charities.name}`}</span>
                <span className="justify-self-end">
                  {`$${transaction.total_offset}`}
                </span>
              </div>
            </div>
          );
        })}
        <Link className="font-display mx-auto py-4" href="/">
          See All Transactions
        </Link>
      </div>
    </div>
  );
}
