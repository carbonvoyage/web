import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { browserName } from 'react-device-detect';
import { Toaster } from 'react-hot-toast';

import Layout from '@components/Layout';

import { AuthModalProvider } from '@context/useAuthModal';
import { MyUserContextProvider } from '@context/useUser';
import { ViewportProvider } from '@context/useViewport';

import type { Database } from 'types_db';

import '@styles/chrome-bug.css';
import '@styles/main.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  useEffect(() => {
    // Check which browser we're using
    // TODO: Add support for Safari and Firefox
    const extensionId =
      browserName === 'Firefox'
        ? 'f2ec00da-28c9-452e-aa88-ad04ad33ee0f'
        : 'hfcefidfclgdpfhekgddffjpnkbilnhf';
    // @ts-ignore These APIs are only available when the extension is installed
    const browser = window.browser ?? window.chrome;

    // Extension is not installed
    if (!browser) {
      return;
    }

    supabaseClient.auth.onAuthStateChange((event, session) => {
      switch (browserName) {
        case 'Chrome':
        case 'Opera':
        case 'Edge':
        case 'Brave':
          switch (event) {
            case 'SIGNED_IN':
            case 'USER_UPDATED':
            case 'TOKEN_REFRESHED':
              browser.runtime.sendMessage(extensionId, {
                action: 'updateSession',
                session: session
              });
              break;
            case 'SIGNED_OUT':
            case 'PASSWORD_RECOVERY':
              browser.runtime.sendMessage(extensionId, {
                action: 'removeSession'
              });
              break;
          }
          break;
        default:
          // TODO: Provide error message
          break;
      }
    });
  });

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

  const DefaultLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
  };
  const getLayout = Component.getLayout ?? DefaultLayout;

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <MyUserContextProvider>
        <AuthModalProvider>
          <ViewportProvider>
            {/* TODO: Use ['/'].includes(appProps.router.pathname) to update layout for landing page  */}
            {getLayout(<Component {...pageProps} />)}
            <Toaster
              position="bottom-center"
              toastOptions={{ style: toastStyle, iconTheme: toastIconTheme }}
            />
          </ViewportProvider>
        </AuthModalProvider>
      </MyUserContextProvider>
    </SessionContextProvider>
  );
}
