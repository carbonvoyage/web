import { useState, Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Dialog, Transition } from '@headlessui/react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../types';
import AuthPrompt from './AuthPrompt';
import Close from 'assets/icons/Close';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  let [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  let [authView, setAuthView] = useState<
    'sign_in' | 'sign_up' | 'forgotten_password' | undefined
  >('sign_in');
  const meta = {
    title: 'Carbon Voyage',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

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
        <link rel="stylesheet" href="https://use.typekit.net/zkr2bhm.css" />
      </Head>
      <Navbar
        setIsAuthModalOpen={setIsAuthModalOpen}
        setAuthView={setAuthView}
      />
      <main id="skip">{children}</main>
      <Transition show={isAuthModalOpen} as={Fragment}>
        <Dialog
          className="relative z-50"
          onClose={() => setIsAuthModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur"
              aria-hidden="true"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4 ">
              <Dialog.Panel className="relative w-full max-w-sm rounded-xl p-8 pb-4 bg-carbon-gold border border-carbon-bronze/20">
                <button
                  onClick={() => setIsAuthModalOpen(false)}
                  aria-label="Close"
                  className="absolute top-5 right-5 p-1 rounded-md duration-300
                   hover:bg-carbon-bronze/10"
                >
                  <Close />
                </button>
                <Dialog.Title className="text-3xl font-display mt-2">
                  {authView === 'sign_up' && <>Get started.</>}
                  {authView === 'sign_in' && <>Welcome back.</>}
                  {authView === 'forgotten_password' && <>Time to reset.</>}
                </Dialog.Title>
                <Dialog.Description className="text-lg font-body mb-6">
                  {authView === 'sign_up' && <>Create a new acount with us.</>}
                  {authView === 'sign_in' && (
                    <>Sign into your account to continue.</>
                  )}
                  {authView === 'forgotten_password' && (
                    <>We&apos;ll help you back into your account.</>
                  )}
                </Dialog.Description>
                <AuthPrompt view={authView} />

                <div className="flex justify-center space-x-2 mt-4 mb-6">
                  {authView === 'forgotten_password' && (
                    <button
                      onClick={() => setAuthView('sign_in')}
                      className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                    >
                      Return to sign in.
                    </button>
                  )}
                  {authView === 'sign_up' && (
                    <button
                      onClick={() => setAuthView('sign_in')}
                      className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                    >
                      Have an account? Sign in.
                    </button>
                  )}
                  {authView === 'sign_in' && (
                    <>
                      <button
                        onClick={() => setAuthView('forgotten_password')}
                        className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                      >
                        Forgot password?
                      </button>
                      <span>·</span>
                      <button
                        onClick={() => setAuthView('sign_up')}
                        className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                      >
                        No account? Sign up.
                      </button>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      <Footer />
    </>
  );
}
