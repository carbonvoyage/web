import { useEffect, useState } from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import s from './Dashboard.module.css';

export default function SummaryCard() {
  const [totalOffset, setTotalOffset] = useState<number | string>();
  const [totalSpent, setTotalSpent] = useState<number | string>();
  const [uniqueCharities, setUniqueCharities] = useState<number | string>();
  const [transactionsCount, setTransactionsCount] = useState<number | string>();

  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    const getTotalOffset = async () => {
      const { data, error } = await supabaseClient.rpc('total_offset');
      setTotalOffset(error ? 'N/A' : data.toFixed(2));
    };
    const getTotalSpent = async () => {
      const { data, error } = await supabaseClient.rpc('total_spent');
      setTotalSpent(error ? 'N/A' : data.toFixed(2));
    };

    const getUniqueCharities = async () => {
      const { data, error } = await supabaseClient.rpc('unique_charities');
      setUniqueCharities(error ? 'N/A' : data);
    };

    const getTransactionsCount = async () => {
      const { data, error } = await supabaseClient.rpc('total_transactions');
      setTransactionsCount(error ? 'N/A' : data);
    };
    getTotalOffset();
    getTotalSpent();
    getUniqueCharities();
    getTransactionsCount();
  });

  return (
    <div className="h-fit bg-carbon-white rounded-b-lg col-span-2">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="text-2xl text-carbon-gold">Transaction Summary</span>
      </div>
      <div className="flex flex-col">
        <div className={`${s.summary_item}`}>
          <p>Total Spent with Extension</p>
          <p className="">{`$${totalSpent}`}</p>
        </div>
        <div className={`${s.summary_item}`}>
          <p>Total Offset Paid</p>
          <p>{`$${totalOffset}`}</p>
        </div>
        <div className={`${s.summary_item}`}>
          <p>Organizations Donated To</p>
          <p>{uniqueCharities}</p>
        </div>
        <div className={`${s.summary_item}`}>
          <p>Total Transactions</p>
          <p>{transactionsCount}</p>
        </div>
      </div>
    </div>
  );
}
