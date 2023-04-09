import Link from 'next/link';
import { FunctionComponent } from 'react';

import { GitHub, Logo, Notion } from '@assets/icons';
import Discord from '@assets/icons/Discord';

import Button from './Button';

type Props = {
  size?: 'normal' | 'large';
};

const Footer: FunctionComponent<Props> = ({ size = 'normal' }) => {
  return (
    <footer className="md:p-8 bg-carbon-bronze text-carbon-gold">
      {size === 'large' && (
        <div className="mx-auto max-w-xl lg:h-screen-1/2 text-center py-16 lg:py-24">
          <h1 className="text-4xl lg:text-6xl font-display">
            Help us build
            <br />
            Carbon Voyage.
          </h1>
          <a
            className="inline-block mt-6"
            href="https://github.com/carbonvoyage"
          >
            <Button
              aria-label="GitHub"
              variant="alt"
              size="large"
              className="flex space-x-1 p-1"
            >
              <GitHub
                height="40px"
                width="40px"
                fill="#7d671f"
                className="p-1 lg:p-0"
              />
              <p className="py-2">Fork us on GitHub</p>
            </Button>
          </a>
        </div>
      )}
      <div className="mx-auto max-w-6xl px-6 flex flex-col lg:flex-row justify-between">
        <div className="text-xs lg:text-sm text-carbon-gold/80 my-4 lg:my-0 ">
          <Link href="/" className="flex flex-row  space-x-2">
            <Button variant="icon" size="none" aria-label="GitHub">
              <Logo height="40px" width="40px" className="p-1" fill="#fff0ad" />
            </Button>
            <h1 className="font-display font-bold text-2xl inline-block leading-10">
              Carbon Voyage
            </h1>
          </Link>
          <p className="my-2 text-carbon-gold/80">
            Copyright © 2023 Carbon Voyage. All rights reserved.
            <br />
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://carbonvoyage.org/terms-of-service"
              target="_blank"
            >
              Terms of Service
            </a>
            <span className="leading-none mx-1">·</span>
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://carbonvoyage.org/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="text-xs lg:text-sm text-carbon-gold/80 order-first lg:order-last">
          <div className="h-10">
            <a href="https://github.com/carbonvoyage" target="_blank">
              <Button variant="icon" size="none" aria-label="GitHub">
                <GitHub
                  height="40px"
                  width="40px"
                  fill="#fff0ad"
                  className="p-1"
                />
              </Button>
            </a>
            <a href="https://discord.gg/" target="_blank">
              <Button variant="icon" size="none" aria-label="GitHub">
                <Discord
                  height="40px"
                  width="40px"
                  fill="#fff0ad"
                  className="p-2"
                />
              </Button>
            </a>
            <a href="https://notion.carbonvoyage.org" target="_blank">
              <Button variant="icon" size="none" aria-label="GitHub">
                <Notion
                  height="40px"
                  width="40px"
                  fill="#fff0ad"
                  className="p-2"
                />
              </Button>
            </a>
          </div>
          <p className="my-2">
            Developed by students at the{' '}
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://www.stevens.edu"
              target="_blank"
            >
              Stevens Institute of Technology
            </a>
            .
            <br /> Free and open-source. Hosted by{' '}
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://vercel.com"
              target="_blank"
            >
              Vercel
            </a>
            ,{' '}
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://supabase.com/"
              target="_blank"
            >
              Supabase
            </a>{' '}
            and{' '}
            <a
              className="underline hover:text-carbon-gold/100"
              href="https://render.com/"
              target="_blank"
            >
              Render
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
