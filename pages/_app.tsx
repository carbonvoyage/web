import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import React from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import Layout from '@components/Layout';

import { AuthModalProvider } from '@context/useAuthModal';
import { MyUserContextProvider } from '@context/useUser';

import type { Database } from 'types_db';

import '@styles/chrome-bug.css';
import '@styles/main.css';

export default function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <MyUserContextProvider>
        <AuthModalProvider>
          {/* TODO: Use ['/'].includes(appProps.router.pathname) to update layout for landing page  */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthModalProvider>
      </MyUserContextProvider>
    </SessionContextProvider>
  );
}
