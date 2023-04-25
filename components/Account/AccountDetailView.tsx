import Link from 'next/link';

import { useUser as userAuthHook } from '@supabase/auth-helpers-react';
import { ChevronRight } from 'assets/icons';

import { useUser } from '@context/useUser';

const AccountDetailView = () => {
  const { userDetails } = useUser();
  const userAuthDetails = userAuthHook();

  return (
    <div className="bg-carbon-white rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze mx-0 sm:mx-8 lg:mx-0">
      <div className="px-4 py-6 md:p-6 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Edit Your Account
        </span>
      </div>
      <div className="flex flex-col py-2">
        <Link href="/account/editName">
          <div className="border-b px-4 md:px-6 py-4 border-carbon-bronze border-opacity-30 cursor-pointer">
            <div className="flex items-center">
              <div className="w-full">
                <span className="text-sm">Your Name</span>
                <p className="font-semibold">
                  {`${userDetails?.first_name} ${userDetails?.last_name}`}
                </p>
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
        </Link>
        <Link href="/account/editPassword">
          <div className="border-b px-4 md:px-6 py-4 border-carbon-bronze border-opacity-30 cursor-pointer">
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
        </Link>
        <Link href="/account/editEmail">
          <div className="px-4 md:px-6 py-4 cursor-pointer">
            <div className="flex items-center">
              <div className="w-full">
                <span className="text-sm">Current Email Address</span>
                <p className="font-semibold">{userAuthDetails?.email}</p>
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
        </Link>
      </div>
    </div>
  );
};

export default AccountDetailView;
