import { GetServerSidePropsContext } from 'next';
import React, { useEffect } from 'react';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { useUser } from '@context/useUser';

const Extension = () => {
  // Get user's JWT and refresh tokens
  const { isLoading, accessToken, user } = useUser();

  // Pass the JWT token to the web extension
  useEffect(() => {
    if (!isLoading && accessToken) {
      window.postMessage(
        {
          type: 'supabase.auth.token',
          accessToken
        },
        '*'
      );
    }
  }, [isLoading, accessToken]);

  return <div></div>;
};

export default Extension;

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
