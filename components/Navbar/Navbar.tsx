import { useEffect, useState, FunctionComponent } from 'react';
import Link from 'next/link';

import { Logo, Hamburger } from 'assets/icons';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type Props = {
  minimal?: boolean;
  links?: {
    name: string;
    href: string;
  }[];
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

  // Default links if none are passed in
  const defaultLinks = [
    { name: 'About', href: '/about' },
    { name: 'Charities', href: '/charities' }
  ];

  // On scroll, add blur to navbar
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBlurBackground(true);
    } else {
      setBlurBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div
      className={`${
        blurBackground
          ? 'backdrop-blur-lg bg-carbon-gold bg-opacity-50 border-b border-carbon-bronze/20 py-3'
          : 'py-6'
      } fixed top-0 inset-x-0 z-40 transition-all duration-200`}
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
              <Logo height="40px" width="40px" className="p-1" />
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
                  Sign Out
                </span>
              ) : (
                <>
                  <Link
                    className="hover:underline decoration-wavy"
                    href="/signin"
                  >
                    Sign In
                  </Link>
                  <Link href="/">
                    <button
                      type="button"
                      className="text-carbon-gold bg-carbon-bronze rounded-xl py-2 px-4"
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;