import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import AuthModal from '@components/AuthModal';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import { PageMeta } from 'types';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Carbon Voyage',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };
  // Check if we're on the homepage
  const isHome = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://carbonvoyage.org${router.asPath}`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://carbonvoyage.org" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div className="flex flex-col h-screen">
        <main id="skip" className="text-lg">
          <Navbar />
          {children}
        </main>
        <AuthModal />
        <Footer size={isHome ? 'large' : 'normal'} />
      </div>
    </>
  );
}
