import { FunctionComponent } from 'react';

import { Transaction, UserDetails } from 'types';

import ActionsCard from './ActionsCard';
import ActivityCard from './ActivityCard';
import SummaryCard from './SummaryCard';

type Props = {
  user: UserDetails | null;
};

const Dashboard: FunctionComponent<Props> = ({ user }) => {
  return (
    <section>
      <div className="bg-carbon-bronze mb-8 h-36 flex items-center p-6 lg:p-0">
        <div className="mx-auto w-full max-w-2xl lg:max-w-6xl space-y-2">
          <h1 className="text-2xl lg:text-4xl text-carbon-gold font-display ">
            {user?.first_name
              ? `Welcome back, ${user.first_name}`
              : 'Your Account'}
          </h1>
          <p className="text-carbon-gold text-lg lg:text-xl">
            Here's a summary of your purchases and account details.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 lg:grid-cols-5 gap-x-6 gap-y-10 max-w-2xl lg:max-w-6xl mx-auto mb-8 p-4 lg:p-0">
        <ActivityCard />
        <SummaryCard />
        <ActionsCard />
      </div>
    </section>
  );
};

export default Dashboard;
