import { GetServerSidePropsContext } from 'next';
import { ReactElement, ReactNode, useState } from 'react';

import {
  User,
  createServerSupabaseClient
} from '@supabase/auth-helpers-nextjs';

import ChangePasswordView from '@components/Account/ChangePasswordView';
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
    if (session.user.app_metadata.provider !== 'email') {
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
  return <ChangePasswordView />;
};

AccountPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  );
};

export default AccountPage;
