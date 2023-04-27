import { GetServerSidePropsContext } from 'next';
import { ReactNode, useState } from 'react';

import {
  User,
  createServerSupabaseClient
} from '@supabase/auth-helpers-nextjs';

import Dashboard from '@components/Dashboard';

import { useUser } from '@context/useUser';
import { postData } from '@utils/helpers';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);

  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    };
  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};

export default function DashboardPage({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, userDetails } = useUser();
  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return <Dashboard user={userDetails} />;
}
