import { useRouter } from 'next/router';
import { useEffect, FunctionComponent } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { Theme } from '@supabase/auth-ui-shared';
import Close from 'assets/icons/Close';
import { useAuthModalContext } from '@/context/authModalContext';

const customTheme: Theme = {
  default: {
    colors: {
      brand: '#7D671F',
      brandAccent: '#7D671F',
      brandButtonText: '#FFF0AD',
      defaultButtonBackground: 'white',
      defaultButtonBackgroundHover: 'white',
      defaultButtonBorder: '#e5d391',
      defaultButtonText: '#7D671F',
      dividerBackground: '#e5d391',
      inputBackground: 'white',
      inputBorder: '#e5d391',
      inputBorderHover: '#7D671F',
      inputBorderFocus: '#7D671F',
      inputText: '#7D671F',
      inputLabelText: '#7D671F',
      inputPlaceholder: '#7D671F78',
      messageText: '#7D671F',
      messageTextDanger: 'red',
      anchorTextColor: '#7D671F78',
      anchorTextHoverColor: '7D671F'
    },
    fonts: {
      bodyFontFamily: '"apolline",serif',
      buttonFontFamily: '"apolline",serif',
      inputFontFamily: '"apolline",serif',
      labelFontFamily: '"apolline",serif'
    },
    fontSizes: {
      baseBodySize: '0.875rem;',
      baseInputSize: '1rem',
      baseLabelSize: '1rem',
      baseButtonSize: '1rem'
    },
    borderWidths: {
      buttonBorderWidth: '1px',
      inputBorderWidth: '1px'
    },
    space: {
      spaceSmall: '4px',
      spaceMedium: '8px',
      spaceLarge: '16px',
      labelBottomMargin: '8px',
      anchorBottomMargin: '4px',
      emailInputSpacing: '4px',
      socialAuthSpacing: '4px',
      buttonPadding: '10px 15px',
      inputPadding: '10px 15px'
    },
    radii: {
      borderRadiusButton: '0.75rem',
      buttonBorderRadius: '0.75rem',
      inputBorderRadius: '0.75rem'
    }
  }
};

const AuthModal: FunctionComponent = () => {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [isOpen, setIsOpen, view, setView] = useAuthModalContext();

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user, router]);

  // TODO Check if !user is needed

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          as={motion.div}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          static
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 ">
            <Dialog.Panel className="relative w-full max-w-sm rounded-xl p-8 pb-4 bg-carbon-gold border border-carbon-bronze/20">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 p-1 rounded-md duration-300
                 hover:bg-carbon-bronze/10"
              >
                <Close />
              </button>
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
              <Auth
                supabaseClient={supabaseClient}
                providers={['apple', 'google', 'github', 'notion']}
                redirectTo={getURL()}
                showLinks={false}
                appearance={{
                  theme: customTheme,
                  style: {
                    button: {
                      fill: 'white'
                    }
                  }
                }}
                view={view}
                socialLayout="horizontal"
                localization={{
                  variables: {
                    sign_in: {
                      email_label: 'Email',
                      password_label: 'Password',
                      email_input_placeholder: 'john.chapman@acme.com',
                      password_input_placeholder: '**********'
                    },
                    sign_up: {
                      email_label: 'Email',
                      password_label: 'Password',
                      email_input_placeholder: 'john.chapman@acme.com',
                      password_input_placeholder: '**********'
                    }
                  }
                }}
              />
              {/* Bottom links. Custom implementation to manage state. */}
              <div className="flex justify-center space-x-2 mt-4 mb-6">
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
                    <span>·</span>
                    <button
                      onClick={() => setView('sign_up')}
                      className="text-sm font-body underline text-carbon-bronze/80 hover:text-carbon-bronze/100"
                    >
                      No account? Sign up.
                    </button>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
