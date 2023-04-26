import Router from 'next/router';
import React, { useEffect } from 'react';

import Landing from '@components/Landing/Landing';

import { useAuthModal } from '@context/useAuthModal';

const SignUp = () => {
  const [_isOpen, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  // Redirect to landing page and open the sign up modal
  useEffect(() => {
    Router.push('/');
    setIsAuthModalOpen(true);
    setAuthModalView('sign_up');
  }, [setIsAuthModalOpen, setAuthModalView]);

  return <Landing />;
};

export default SignUp;
