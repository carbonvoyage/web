import { Transaction } from 'types';

const DonationSummary = ({
  transaction_details
}: {
  transaction_details: Transaction;
}) => {
  const { created_at, total_price, total_offset, total_emissions } =
    transaction_details;
  const transactionDate = new Date(created_at);
  const formattedDate = transactionDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const condensedDate = transactionDate.toLocaleDateString('en-us', {
    month: 'short',
    year: 'numeric',
    day: 'numeric'
  });

  return (
    <div className="bg-carbon-white rounded-md row-span-2 col-span-6 border border-carbon-bronze overflow-hidden">
      <div className="p-4 bg-carbon-bronze flex items-center">
        <span className="text-2xl text-carbon-gold">Donation Summary</span>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <span>Transaction Date</span>
            <span className="ml-auto hidden sm:block font-semibold">
              {formattedDate}
            </span>
            <span className="ml-auto block sm:hidden font-semibold">
              {condensedDate}
            </span>
          </div>
          <div className="flex">
            <span>Total Price</span>
            <span className="ml-auto font-semibold">${total_price}</span>
          </div>
          <div className="flex">
            <span>Total Offset</span>
            <span className="ml-auto font-semibold">${total_offset}</span>
          </div>
          <div className="flex">
            <span>Total Emissions</span>
            <span className="ml-auto font-semibold">{total_emissions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSummary;
