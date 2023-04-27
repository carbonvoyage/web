import Router from 'next/router';
import React, { useEffect } from 'react';

import Landing from '@components/Landing/Landing';

import { useAuthModal } from '@context/useAuthModal';

const SignIn = () => {
  const [_isOpen, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  // Redirect to landing page and open the sign in modal
  useEffect(() => {
    Router.push('/');
    setIsAuthModalOpen(true);
    setAuthModalView('sign_in');
  }, [setIsAuthModalOpen, setAuthModalView]);

  return <Landing />;
};

export default SignIn;
