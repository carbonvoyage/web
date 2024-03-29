import { createContext, useContext, useEffect, useState } from 'react';

import {
  User,
  useSessionContext,
  useUser as useSupaUser
} from '@supabase/auth-helpers-react';

import { Transaction, UserDetails } from 'types';

type UserContextType = {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  transactionDetails: Transaction[] | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const refreshToken = session?.refresh_token ?? null;
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [transactionDetails, setTransactionDetails] = useState<
    Transaction[] | null
  >([]);

  const getUserDetails = () => supabase.from('users').select('*').single();
  const getTransactions = () =>
    supabase
      .from('transactions')
      .select(`*, charities(name)`)
      .order('created_at', { ascending: false });

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true);
      Promise.allSettled([getUserDetails(), getTransactions()]).then(
        (results) => {
          const userDetailsPromise = results[0];
          const transactionPromise = results[1];

          if (userDetailsPromise.status === 'fulfilled')
            // TODO: Fix this ts-ignore
            // @ts-ignore

            setUserDetails(userDetailsPromise.value.data);
          if (transactionPromise.status === 'fulfilled')
            //TODO: Fix this ts-ignore
            // @ts-ignore
            setTransactionDetails(transactionPromise.value.data);

          setIsloadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    refreshToken,
    user,
    userDetails,
    transactionDetails,
    isLoading: isLoadingUser || isLoadingData
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
