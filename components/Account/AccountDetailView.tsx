import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

import {
  useSession,
  useUser as userAuthHook
} from '@supabase/auth-helpers-react';
import { Apple, GitHub, Google, Notion } from 'assets/icons';
import { ChevronRight } from 'assets/icons';

import { useUser } from '@context/useUser';

type Provider = {
  name: string;
  icon: ReactNode;
};

const providerList: { [key: string]: Provider } = {
  google: {
    name: 'Google',
    icon: <Google width="30px" height="30px" className="fill-carbon-bronze" />
  },
  apple: {
    name: 'Apple',
    icon: <Apple width="30px" height="30px" className="fill-carbon-bronze" />
  },
  github: {
    name: 'GitHub',
    icon: <GitHub width="30px" height="30px" className="fill-carbon-bronze" />
  }
};

const AccountDetailView = () => {
  const { userDetails } = useUser();
  const session = useSession();
  const userAuthDetails = userAuthHook();

  const [provider, setProvider] = useState('email');

  useEffect(() => {
    setProvider(session?.user.app_metadata.provider || 'email');
  }, [session]);

  return (
    <div className="bg-carbon-white h-fit rounded-lg basis-2/3 border overflow-hidden border-carbon-bronze mx-2 sm:mx-8 lg:mx-0">
      <div className="px-4 py-6 md:p-6 bg-carbon-bronze flex items-center">
        <span className="text-xl text-carbon-gold font-display">
          Edit Your Account
        </span>
      </div>
      <div className="flex flex-col">
        <Link href="/account/editName">
          <div className="border-b px-4 md:px-6 py-4 border-carbon-bronze border-opacity-30 cursor-pointer">
            <div className="flex items-center">
              <div className="w-full">
                <span className="text-sm">Your Name</span>

                <p className="font-semibold">
                  {userDetails?.first_name && userDetails?.last_name
                    ? `${userDetails?.first_name} ${userDetails?.last_name}`
                    : 'Set Your Name'}
                  {}
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
          <div
            className={`border-b px-4 md:px-6 py-4 border-carbon-bronze border-opacity-30 cursor-pointer ${
              provider !== 'email' && 'bg-carbon-light cursor-default'
            }`}
          >
            <div className="flex items-center">
              <div className="w-full">
                <span className="text-sm">Password</span>
                {provider === 'email' ? (
                  <p className="font-semibold">********</p>
                ) : (
                  <p className="font-semibold">
                    Password can be changed through{' '}
                    {providerList[provider].name}
                  </p>
                )}
              </div>
              <div>
                {provider === 'email' ? (
                  <ChevronRight
                    width="20px"
                    height="20px"
                    className="fill-carbon-bronze"
                  />
                ) : (
                  providerList[provider].icon
                )}
              </div>
            </div>
          </div>
        </Link>
        <Link href="/account/editEmail">
          <div
            className={`px-4 md:px-6 py-4 cursor-pointer ${
              provider !== 'email' && 'bg-carbon-light cursor-default'
            }`}
          >
            <div className="flex items-center">
              <div className="w-full">
                <span className="text-sm">Current Email Address</span>

                <p className="font-semibold">{userAuthDetails?.email}</p>
              </div>
              <div>
                {provider === 'email' ? (
                  <ChevronRight
                    width="20px"
                    height="20px"
                    className="fill-carbon-bronze"
                  />
                ) : (
                  providerList[provider].icon
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountDetailView;
