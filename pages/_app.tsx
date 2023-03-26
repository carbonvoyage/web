import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Toaster } from 'react-hot-toast';

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

  const toastStyle: CSSProperties = {
    border: '1px solid rgb(125 103 31 / 0.2)',
    padding: '16px',
    color: '#7d671f',
    background: '#fff0ad'
  };

  const toastIconTheme = {
    primary: '#7d671f',
    secondary: '#fff0ad'
  };

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <MyUserContextProvider>
        <AuthModalProvider>
          {/* TODO: Use ['/'].includes(appProps.router.pathname) to update layout for landing page  */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster
            position="bottom-center"
            toastOptions={{ style: toastStyle, iconTheme: toastIconTheme }}
          />
        </AuthModalProvider>
      </MyUserContextProvider>
    </SessionContextProvider>
  );
}
