import React, { useEffect } from 'react';

import { browserName } from 'react-device-detect';

import { useAuthModal } from '@context/useAuthModal';
import { useUser } from '@context/useUser';

const Onboarding = () => {
  const { accessToken, refreshToken } = useUser();
  const [_, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  useEffect(() => {
    if (!accessToken) {
      setIsAuthModalOpen(true);
      setAuthModalView('sign_in');
      return;
    }

    // @ts-ignore These APIs are only available when the extension is installed
    const browser = window.browser ?? window.chrome;

    // Extension is not installed
    if (!browser) {
      return;
    }

    switch (browserName) {
      case 'Chrome':
      case 'Opera':
      case 'Edge':
      case 'Brave':
        browser.runtime.sendMessage('hfcefidfclgdpfhekgddffjpnkbilnhf', {
          action: 'updateSession',
          session: {
            access_token: accessToken,
            refresh_token: refreshToken
          }
        });
        break;
      default:
        // TODO: Provide error message
        break;
    }
  }, [accessToken, refreshToken, setAuthModalView, setIsAuthModalOpen]);

  return <div></div>;
};

export default Onboarding;
