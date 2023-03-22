import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { Dialog } from '@headlessui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';

import Button from '@components/Button';

import { useAuthModal } from '@context/useAuthModal';
import { getURL } from '@utils/helpers';

import { Apple, Close, GitHub, Google, Notion } from '@assets/icons';

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const background = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    }
  }
};

const modal = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 24
    }
  }
};

const AuthModal: FunctionComponent = () => {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const willChange = useWillChange();
  const [isOpen, setIsOpen, view, setView] = useAuthModal();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);

  // TODO Move this to index.tsx
  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user, router]);

  const handleEmailLogin = async () => {
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });
  };

  const handleEmailSignUp = async () => {
    await supabaseClient.auth.signUp({
      email: email,
      password: password
    });
  };

  const handleForgotPassword = async () => {
    await supabaseClient.auth.resetPasswordForEmail(email);
  };

  type Provider = 'github' | 'google' | 'apple' | 'notion';
  const handleProviderLogin = async (provider: Provider) => {
    await supabaseClient.auth.signInWithOAuth({
      provider: provider
    });
  };

  // TODO Error handling and message

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initialFocus={emailRef}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative z-50"
        >
          <motion.div
            variants={background}
            className="fixed inset-0 bg-black/20 backdrop-blur"
            style={{ willChange }}
            // style={{ backdropFilter: `blur(${1}px)` }}
            aria-hidden="true"
          />
          <motion.div
            variants={modal}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ willChange }}
          >
            <Dialog.Panel className="relative w-full max-w-sm rounded-xl p-8 pb-4 bg-carbon-gold border border-carbon-bronze/20">
              <Button
                variant="icon"
                size="minimal"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5"
              >
                <Close />
              </Button>
              <Dialog.Title className="text-3xl font-display mt-2">
                {view === 'sign_up' && <>Get started.</>}
                {view === 'sign_in' && <>Welcome back.</>}
                {view === 'forgotten_password' && <>Time to reset.</>}
              </Dialog.Title>
              <Dialog.Description className="text-lg font-body mb-6">
                {view === 'sign_up' && <>Create a new acount with us.</>}
                {view === 'sign_in' && <>Sign into your account to continue.</>}
                {view === 'forgotten_password' && (
                  <>We&apos;ll help you back into your account.</>
                )}
              </Dialog.Description>
              {/* Social and form login. */}
              {view !== 'forgotten_password' && (
                <>
                  <div className="flex flex-row justify-between">
                    <Button
                      variant="light"
                      size="small"
                      onClick={() => handleProviderLogin('apple')}
                    >
                      <Apple className="p-1 fill-current" height="2rem" />
                    </Button>
                    <Button
                      variant="light"
                      size="small"
                      onClick={() => handleProviderLogin('google')}
                    >
                      <Google className="p-1 fill-current" height="2rem" />
                    </Button>
                    <Button
                      variant="light"
                      size="small"
                      onClick={() => handleProviderLogin('github')}
                    >
                      <GitHub className="p-1 fill-current" height="2rem" />
                    </Button>
                    <Button
                      variant="light"
                      size="small"
                      onClick={() => handleProviderLogin('notion')}
                    >
                      <Notion className="p-1 fill-current" height="2rem" />
                    </Button>
                  </div>
                  <div
                    aria-hidden="true"
                    className="my-4 border-b border-carbon-bronze/20"
                  />
                </>
              )}
              {/* Email and password login. */}
              <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-sm font-body">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    className="border border-carbon-bronze/20 rounded-xl p-2 placeholder:text-carbon-bronze/50 focus:outline-none focus:border-carbon-bronze/50"
                    placeholder="john.chapman@acme.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {view !== 'forgotten_password' && (
                  <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="text-sm font-body">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="border border-carbon-bronze/20 rounded-xl p-2 placeholder:text-carbon-bronze/50 focus:outline-none focus:border-carbon-bronze/50"
                      placeholder="appleseeds"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                )}
                <div className="flex justify-between mt-1 mb-4">
                  <Button
                    onClick={() => {
                      switch (view) {
                        case 'sign_up':
                          handleEmailSignUp();
                          break;
                        case 'sign_in':
                          handleEmailLogin();
                          break;
                        case 'forgotten_password':
                          handleForgotPassword();
                          break;
                      }
                    }}
                  >
                    {view === 'sign_up' && <>Sign up</>}
                    {view === 'sign_in' && <>Sign in</>}
                    {view === 'forgotten_password' && <>Send reset email</>}
                  </Button>
                  {/* Bottom links. Custom implementation to manage state. */}
                  <div className="flex justify-center space-x-2 py-3">
                    {view === 'forgotten_password' && (
                      <button
                        onClick={() => setView('sign_in')}
                        className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                      >
                        Return to sign in.
                      </button>
                    )}
                    {view === 'sign_up' && (
                      <button
                        onClick={() => setView('sign_in')}
                        className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                      >
                        Have an account? Sign in.
                      </button>
                    )}
                    {view === 'sign_in' && (
                      <>
                        <button
                          onClick={() => setView('forgotten_password')}
                          className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                        >
                          Forgot password?
                        </button>
                        <span className="leading-none">·</span>
                        <button
                          onClick={() => setView('sign_up')}
                          className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                        >
                          Sign up.
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {view === 'sign_up' && (
                <p className="text-sm mb-4 text-carbon-bronze/60">
                  By continuing, you agree to Carbon Voyage&apos;s{' '}
                  <a
                    href=""
                    className='className="text-sm font-body underline hover:text-carbon-bronze/100"'
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href=""
                    className='className="text-sm font-body underline hover:text-carbon-bronze/100"'
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              )}
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
