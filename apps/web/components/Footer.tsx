import Link from 'next/link';

import { Logo, GitHub } from 'icons';

export default function Footer() {
  return (
    <footer className="mt-24 mx-auto max-w-[1920px] py-8 md:p-8 bg-carbon-bronze">
      <div className="flex flex-col gap-6 items-center text-carbon-gold bg-carbon-bronze">
        <div className="text-lg sm:text-xl">
          <ul className="flex flex-wrap justify-center text-center">
            <li className="px-3 sm:px-5">
              <Link
                href="/"
                className=" hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Home
              </Link>
            </li>
            <li className="px-3 sm:px-5">
              <Link
                href="/"
                className=" hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Contribute
              </Link>
            </li>
            <li className="px-3 sm:px-5">
              <Link
                href="/"
                className=" hover:text-zinc-200 transition ease-in-out duration-150"
              >
                News
              </Link>
            </li>
            <li className="px-3 sm:px-5">
              <Link
                href="/"
                className=" hover:text-zinc-200 transition ease-in-out duration-150"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <GitHub />
        </div>
        <div>
          <Link
            href="/"
            className="flex flex-initial items-center font-semibold"
          >
            <span className="mr-2">
              <Logo className="stroke-carbon-gold" />
            </span>
            <span className="text-2xl">Carbon Voyage</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
