import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { Dialog } from '@headlessui/react';
import {
  SupabaseClient,
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import toast from 'react-hot-toast';

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

type FormProps = {
  view: 'sign_in' | 'sign_up' | 'forgotten_password' | undefined;
  setView: Function;
  supabaseClient: SupabaseClient<any, 'public', any>;
  emailRef: any;
};

const Form: FunctionComponent<FormProps> = ({
  view = 'sign_in',
  setView,
  supabaseClient,
  emailRef
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const validEmail = () => {
    if (email.length === 0 && password.length === 0) {
      toast.error('Email and password are required.');
      return false;
    } else if (email.length < 3) {
      toast.error('Email must be at least 3 characters long.');
      return false;
    } else if (email.length > 100) {
      toast.error('Email must be less than 100 characters long.');
      return false;
    }
    // eslint-disable-next-line no-useless-escape
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      toast.error('Email must be valid.');
      return false;
    }
    return true;
  };

  const validPassword = () => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      toast.error(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
      );
      return false;
    } else if (password.length > 100) {
      toast.error('Password must be less than 100 characters long.');
      return false;
    }
    return true;
  };

  const handleEmailLogin = async () => {
    if (!validEmail() || !validPassword()) {
      return;
    }

    await supabaseClient.auth
      .signInWithPassword({
        email: email,
        password: password
      })
      .then((response) => {
        if (response.error) {
          toast.error(response.error.message);
        }
      });
  };

  const handleEmailSignUp = async () => {
    if (!validEmail() || !validPassword()) {
      return;
    }

    await supabaseClient.auth
      .signUp({
        email: email,
        password: password
      })
      .then((response) => {
        if (response.error) {
          toast.error(`${response.error.message}.`);
        }
      });
  };

  const handleForgotPassword = async () => {
    await supabaseClient.auth.resetPasswordForEmail(email).then((response) => {
      if (!validEmail()) {
        return;
      }

      if (response.error) {
        toast.error(response.error.message);
      } else {
        toast.success('Password reset email sent.');
      }
    });
  };

  return (
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
          required
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
            required
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
          {(() => {
            switch (view) {
              case 'sign_up':
                return <>Sign up</>;
              case 'sign_in':
                return <>Sign in</>;
              case 'forgotten_password':
                return <>Send reset email</>;
            }
          }).call(this)}
        </Button>
        {/* Bottom links. Custom implementation to manage state. */}
        <div className="flex justify-center space-x-2 py-3">
          {(() => {
            switch (view) {
              case 'sign_up':
                return (
                  <button
                    onClick={() => setView('sign_in')}
                    className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                  >
                    Have an account? Sign in.
                  </button>
                );
              case 'sign_in':
                return (
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
                );
              case 'forgotten_password':
                return (
                  <button
                    onClick={() => setView('sign_in')}
                    className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                  >
                    Return to sign in.
                  </button>
                );
            }
          }).call(this)}
        </div>
      </div>
    </div>
  );
};

const AuthModal: FunctionComponent = () => {
  const supabaseClient = useSupabaseClient();
  const willChange = useWillChange();
  const [isOpen, setIsOpen, view, setView] = useAuthModal();
  const emailRef = useRef<HTMLInputElement>(null);

  type Provider = 'github' | 'google' | 'apple' | 'notion';
  const handleProviderLogin = async (provider: Provider) => {
    await supabaseClient.auth.signInWithOAuth({
      provider: provider
    });
  };

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
                {(() => {
                  switch (view) {
                    case 'sign_up':
                      return <>Get started.</>;
                    case 'sign_in':
                      return <>Welcome back.</>;
                    case 'forgotten_password':
                      return <>Time to reset.</>;
                  }
                }).call(this)}
              </Dialog.Title>
              <Dialog.Description className="text-lg font-body mb-6">
                {(() => {
                  switch (view) {
                    case 'sign_up':
                      return <>Create a new acount with us.</>;
                    case 'sign_in':
                      return <>Sign into your account to continue.</>;
                    case 'forgotten_password':
                      return <>We&apos;ll help you back into your account.</>;
                  }
                }).call(this)}
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
              <Form
                view={view}
                setView={setView}
                supabaseClient={supabaseClient}
                emailRef={emailRef}
              />
              {/* Bottom TOS Agreement */}
              {view === 'sign_up' && (
                <p className="text-sm mb-4 text-carbon-bronze/60">
                  By continuing, you agree to Carbon Voyage&apos;s{' '}
                  <a
                    href="https://carbonvoyage.org/terms-of-service"
                    className="text-sm font-body underline hover:text-carbon-bronze/100"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://carbonvoyage.org/privacy-policy"
                    className="text-sm font-body underline hover:text-carbon-bronze/100"
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
