import { ReactNode, useState } from 'react';

import { useViewport } from '@context/useViewport';

import MobileNavigator from './Account/MobileNavigator';
import Navigator from './Account/Navigator';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { width } = useViewport();
  const mobileWidth = 1024;

  return (
    <section className="mx-auto ">
      <div className="bg-carbon-bronze mb-8 h-36 flex items-center lg:p-0">
        <div className="mx-auto w-full max-w-2xl lg:max-w-6xl space-y-2 p-6">
          <h1 className="text-2xl lg:text-4xl text-carbon-gold font-display ">
            Your Account
          </h1>
          <p className="text-carbon-gold text-lg lg:text-xl">
            Change your account settings on this page.
          </p>
        </div>
      </div>
      <div className="mx-auto lg:flex w-full max-w-2xl sm:max-w-6xl gap-x-8 mb-8 lg:my-8 lg:px-6">
        {width < mobileWidth ? <MobileNavigator /> : <Navigator />}
        {children}
      </div>
    </section>
  );
}
