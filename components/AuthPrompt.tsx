import { useRouter } from 'next/router';
import { useEffect, FunctionComponent } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { Theme } from '@supabase/auth-ui-shared';

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

type Props = {
  view?: 'sign_in' | 'sign_up' | 'forgotten_password';
};

const AuthPrompt: FunctionComponent<Props> = ({ view = 'sign_in' }) => {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user, router]);

  if (!user)
    return (
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
    );

  return <div className="m-6">{/* <LoadingDots /> */}</div>;
};

export default AuthPrompt;
