import { useState } from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';

import { Logo } from 'icons';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Navbar = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
            >
              <svg
                className="w-10 h-10 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex flex-1 justify-end space-x-8">
            <nav className="space-x-4 p-2 lg:block">
              <Link
                href="/"
                className={`${s.link} text-carbon-gold border-solid border-carbon-bronze`}
              >
                <button
                  type="button"
                  className="bg-carbon-bronze rounded-full p-4"
                >
                  Act Now
                </button>
              </Link>
              <Link href="/account" className={`${s.link} text-carbon-bronze`}>
                Charities
              </Link>
              {user ? (
                <span
                  className={`${s.link} text-carbon-bronze`}
                  onClick={async () => {
                    await supabaseClient.auth.signOut();
                    router.push('/signin');
                  }}
                >
                  Sign out
                </span>
              ) : (
                <Link href="/signin" className={`${s.link} text-carbon-bronze`}>
                  Sign in
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileMenuOpened ? 'block' : 'hidden'
        } bg-carbon-gold w-screen`}
      >
        <nav className="flex flex-col">
          <Link
            href="/account"
            className={`${s.link} text-carbon-bronze border-y border-carbon-bronze`}
          >
            Charities
          </Link>
          {user ? (
            <span
              className={`${s.link} text-carbon-bronze`}
              onClick={async () => {
                await supabaseClient.auth.signOut();
                router.push('/signin');
              }}
            >
              Sign out
            </span>
          ) : (
            <Link
              href="/signin"
              className={`${s.link} rounded-none text-carbon-bronze border-carbon-bronze`}
            >
              Sign in
            </Link>
          )}
          <Link
            href="/"
            className="text-carbon-gold border-solid border-carbon-bronze"
          >
            <button type="button" className="bg-carbon-bronze p-2 w-full">
              Act Now
            </button>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
