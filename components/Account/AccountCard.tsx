import { ChevronRight } from 'assets/icons';

import s from './Account.module.css';

const AccountCard = () => {
  return (
    <div className="bg-carbon-white rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze">
      <div className="p-4 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Edit Your Account Information
        </span>
      </div>
      <div className="flex flex-col py-4">
        <span className="rounded-full w-40 h-40 bg-carbon-bronze mx-auto my-8"></span>
        <div className="border-y px-8 py-4  border-carbon-bronze border-opacity-30">
          <div className="flex items-center">
            <div className="w-full">
              <span className="text-sm">First Name</span>
              <p className="font-semibold">Joe Acme</p>
            </div>
            <div>
              <ChevronRight
                width="20px"
                height="20px"
                className="fill-carbon-bronze"
              />
            </div>
          </div>
        </div>
        <div className="border-b px-8 py-4 border-carbon-bronze border-opacity-30">
          <div className="flex items-center">
            <div className="w-full">
              <span className="text-sm">Password</span>
              <p className="font-semibold">********</p>
            </div>
            <div>
              <ChevronRight
                width="20px"
                height="20px"
                className="fill-carbon-bronze"
              />
            </div>
          </div>
        </div>
        <div className="px-8 py-4">
          <div className="flex items-center">
            <div className="w-full">
              <span className="text-sm">Current Email Address</span>
              <p className="font-semibold">joe@acme.com</p>
            </div>
            <div>
              <ChevronRight
                width="20px"
                height="20px"
                className="fill-carbon-bronze"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
