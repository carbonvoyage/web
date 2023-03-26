import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import Button from '@components/Button';

import { useAuthModal } from '@context/useAuthModal';
import { useUser } from '@context/useUser';

import { Hamburger, Logo, Warning } from '@assets/icons';

type Link = {
  name: string;
  href: string;
};

type Props = {
  minimal?: boolean;
  links?: Link[];
};

// Navbar component
// Minimal prop is used to hide the "Carbon Voyage" text in the navbar
// Links prop is used to pass in custom links to the navbar,
// replacing the default links.
const Navbar: FunctionComponent<Props> = ({ minimal = false, links }) => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const [blurBackground, setBlurBackground] = useState(false);
  const [_isOpen, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  // Default links if none are passed in
  const defaultLinks: Link[] = [
    { name: 'About', href: '/about' },
    { name: 'Charities', href: '/charities' },
    { name: 'Calculator', href: '/calculator' }
  ];

  // On scroll, add blur to navbar
  const handleScroll = () => {
    const warningHeight = 40;

    if (window.scrollY > warningHeight) {
      setBlurBackground(true);
    } else {
      setBlurBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // TODO Reimplement mobile menu
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <>
      <div className="bg-carbon-bronze text-carbon-gold">
        <div className="mx-auto max-w-6xl text-center py-2">
          <Warning className="inline-block mr-1 p-1" />
          This project is in early development. Track progress on{' '}
          <a
            className="underline hover:text-carbon-gold/100"
            target="_blank"
            href="https://github.com/carbonvoyage/web"
          >
            GitHub
          </a>
          .
        </div>
      </div>
      <div
        className={`${
          blurBackground
            ? 'backdrop-blur-lg bg-carbon-gold bg-opacity-50 border-b border-carbon-bronze/20 py-3'
            : 'py-3'
        } sticky top-0 inset-x-0 z-40 transition-all duration-200`}
      >
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-between align-center flex-row relative">
            {/* Left side of Navbar */}
            <div className="flex flex-1 items-center">
              <Link
                href="/"
                aria-label="Carbon Voyage Logo"
                className="flex space-x-2"
              >
                <Button variant="icon" size="none" aria-label="GitHub">
                  <Logo height="40px" width="40px" className="p-1" />
                </Button>
                {!minimal && (
                  <h1 className="font-display font-bold text-2xl inline-block leading-10">
                    Carbon Voyage
                  </h1>
                )}
              </Link>
            </div>
            {/* Right side of Navbar */}
            <div className="lg:hidden flex items-center">
              {/* Mobile */}
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
              >
                <Hamburger
                  height="40px"
                  width="40px"
                  className="p-1 stroke-current text-carbon-bronze"
                />
              </button>
            </div>
            <div className="hidden lg:flex flex-1 justify-end">
              <nav className="space-x-8 lg:block">
                {links
                  ? links.map((link) => (
                      <Link
                        className="hover:underline decoration-wavy"
                        href={link.href}
                        key={link.name}
                      >
                        {link.name}
                      </Link>
                    ))
                  : defaultLinks.map((link) => (
                      <Link
                        className="hover:underline decoration-wavy"
                        href={link.href}
                        key={link.name}
                      >
                        {link.name}
                      </Link>
                    ))}
                {user ? (
                  <span
                    className="hover:underline decoration-wavy"
                    onClick={async () => {
                      await supabaseClient.auth.signOut();
                      router.push('/signin');
                    }}
                  >
                    Sign out
                  </span>
                ) : (
                  <>
                    <a
                      className="hover:underline decoration-wavy cursor-pointer"
                      onClick={() => {
                        setIsAuthModalOpen(true), setAuthModalView('sign_in');
                      }}
                    >
                      Sign in
                    </a>
                    <Button
                      onClick={() => {
                        setIsAuthModalOpen(true), setAuthModalView('sign_up');
                      }}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
