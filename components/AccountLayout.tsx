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
    <section className="mx-auto lg:flex w-full max-w-2xl sm:max-w-6xl gap-x-8 mb-8 lg:my-8 lg:px-6">
      {width < mobileWidth ? <MobileNavigator /> : <Navigator />}
      {children}
    </section>
  );
}
