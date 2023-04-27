import { Charity } from 'types';

const CharitySummary = ({ charity_data }: { charity_data: Charity }) => {
  const { name, total_transactions, first_donated, total_donated } =
    charity_data;

  const firstDonationDate = new Date(first_donated);
  const formattedDate = firstDonationDate.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric'
  });
  const condensedDate = firstDonationDate.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-carbon-white rounded-md row-span-2 col-span-6 border border-carbon-bronze overflow-hidden">
      <div className="p-4 bg-carbon-bronze flex items-center">
        <span className="text-2xl text-carbon-gold">Charity of Choice</span>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex">
            <div>
              <p className="text-sm">Donated To</p>
              <p className="font-display">{name}</p>
            </div>
            <div className="ml-auto"></div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex basis-1/3 border-r border-carbon-bronze border-opacity-30">
            <div>
              <p className="text-xs sm:text-sm">Total Donated</p>
              <p className="font-display">${total_donated.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex basis-1/3 border-r border-carbon-bronze border-opacity-30 ml-4 justify-left">
            <div>
              <p className="text-xs sm:text-sm">Transactions</p>
              <p className="font-display">{total_transactions}</p>
            </div>
          </div>
          <div className="flex basis-1/3 ml-4 justify-left">
            <div>
              <p className="text-xs sm:text-sm">First Donated</p>
              <p className="font-display hidden md:block">{formattedDate}</p>
              <p className="font-display md:font-display block md:hidden">
                {condensedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharitySummary;
