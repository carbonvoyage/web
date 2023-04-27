import Link from 'next/link';
import { useEffect, useState } from 'react';

import Pagination from '@components/Pagination';

import { useUser } from '@context/useUser';

import { Transaction } from 'types';

export default function ActivityCard() {
  const { transactionDetails } = useUser();
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const [start, setStart] = useState<number>(0);

  const itemsPerPage = 3;
  const end =
    start + itemsPerPage > transaction.length
      ? transaction.length
      : start + itemsPerPage;

  useEffect(() => {
    setTransaction(transactionDetails ?? []);
  }, [transactionDetails]);

  return (
    <div className="bg-carbon-white rounded-b-lg row-span-1 lg:row-span-2 col-span-3 h-fit">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="text-2xl text-carbon-gold">Recent Activity</span>
      </div>
      <div className="flex flex-col">
        {transaction?.length ? (
          transaction.slice(start, end).map((transaction) => {
            const transactionDate = new Date(transaction.created_at);
            return (
              <Link
                className="border-b border-carbon-bronze border-opacity-50"
                href={`/transactions/${transaction.id}`}
                key={transaction.id}
              >
                <div
                  className="flex p-5  last:border-b-0 "
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
                    <span className="font-display self-end">
                      {transaction.marketplace || 'N/A'}
                    </span>
                    <span className="font-display justify-self-end self-end">
                      {`$${transaction.total_price}`}
                    </span>
                    <span className="">{`Donated to ${
                      // @ts-ignore this implies taking the first charity...
                      transaction.charities ? transaction.charities.name : 'N/A'
                    }`}</span>
                    <span className="justify-self-end">
                      {`$${transaction.total_offset}`}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="flex p-5 border-b border-carbon-bronze last:border-b-0 border-opacity-50 h-80 justify-center">
            <h1 className="text-xl self-center text-center">
              No transactions have been made with the Carbon Voyage Extension!
            </h1>
          </div>
        )}
        <Pagination
          total_count={transaction.length}
          start={start}
          limit={3}
          setStart={setStart}
          end={end}
        />
      </div>
    </div>
  );
}
