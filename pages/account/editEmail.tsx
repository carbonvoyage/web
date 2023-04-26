import { GetServerSidePropsContext } from 'next';
import { ReactElement, ReactNode, useState } from 'react';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import ChangeEmailView from '@components/Account/ChangeEmailView';
import AccountLayout from '@components/AccountLayout';
import Layout from '@components/Layout';

import type { NextPageWithLayout } from '../_app';

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
  else {
    if (session.user.user_metadata.provider !== 'email') {
      return {
        redirect: {
          destination: '/account',
          permanent: false
        }
      };
    }
  }
  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};

const AccountPage: NextPageWithLayout = () => {
  return <ChangeEmailView />;
};

AccountPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  );
};

export default AccountPage;
