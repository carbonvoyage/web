import Button from '@components/Button';

import { Book, Every, GitHub, Heart, Watch } from '@assets/icons';

export default function Intro() {
  return (
    <section className="bg-carbon-white">
      <div className="mx-auto max-w-6xl flex flex-row">
        <div className="basis-1/2 py-12 px-8 -my-40">
          <div className="h-screen sticky top-0 py-24">
            <div className="absolute top-1/2 -translate-y-1/2">
              <h1 className="text-3xl lg:text-5xl font-display">
                Built by Students, for a Better Future.
              </h1>
              <div className="text-xl mt-6 space-y-2">
                <p>
                  Carbon Voyage is a Senior Design project at the{' '}
                  <a href="https://www.stevens.edu/" className="underline">
                    Stevens Institute of Technology
                  </a>
                  .
                </p>
                <p>
                  We are a team of six undergraduate Computer Science students
                  with an economics professor and computer science professor as
                  academic advisors.
                </p>
                <p>
                  We are building Carbon Voyage to make a positive
                  <br /> impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 px-8 -my-40 py-80 space-y-24">
          <div>
            <Watch
              width="64px"
              height="64px"
              className="p-4 mb-4 bg-carbon-gold rounded-2xl border border-carbon-light shadow-lg shadow-carbon-bronze/20"
            />
            <h1 className="text-2xl lg:text-2xl font-display">
              Get Started in Minutes
            </h1>
            <p className="text-xl mt-2">
              Carbon Voyage is a browser extension that makes it easy to
              understand and offset your carbon footprint. Sign up and install
              the extension in minutes.
            </p>
          </div>
          <div>
            <Heart
              width="64px"
              height="64px"
              className="p-4 mb-4 bg-carbon-gold rounded-2xl border border-carbon-light shadow-lg shadow-carbon-bronze/20"
            />
            <h1 className="text-2xl lg:text-2xl font-display">
              A Non-Profit Project
            </h1>
            <p className="text-xl mt-2">
              Carbon Voyage is a non-profit project. We are not motivated by
              profit, but by the desire to make a positive impact on the world.
            </p>
          </div>
          <div>
            <GitHub
              width="64px"
              height="64px"
              className="p-2 mb-4 bg-carbon-gold fill-carbon-bronze rounded-2xl border border-carbon-light shadow-lg shadow-carbon-bronze/20"
            />
            <h1 className="text-2xl lg:text-2xl font-display">
              Free and Open Source
            </h1>
            <p className="text-xl mt-2">
              Carbon Voyage is fully open source and free to use. We believe
              that everyone should have access to the tools they need to
              understand their carbon footprint.
            </p>
            <a
              className="inline-block mt-2"
              href="https://github.com/carbonvoyage"
            >
              <Button aria-label="GitHub" className="flex p-1">
                Fork us on GitHub
              </Button>
            </a>
          </div>
          <div>
            <Every
              width="64px"
              height="64px"
              className="p-4 mb-4 bg-carbon-gold fill-carbon-bronze rounded-2xl border border-carbon-light shadow-lg shadow-carbon-bronze/20"
            />
            <h1 className="text-2xl lg:text-2xl font-display">
              Powered by Every.org
            </h1>
            <p className="text-xl mt-2">
              Every.org is a 501(c)(3) non-profit charity. All carbon offset
              purchases are made through Every.org, and all proceeds are granted
              to the charity of your choice.
            </p>
            <a className="inline-block mt-2" href="https://www.every.org/">
              <Button aria-label="GitHub" className="flex p-1">
                Learn more about Every.org
              </Button>
            </a>
          </div>
          <div>
            <Book
              width="64px"
              height="64px"
              className="p-4 mb-4 bg-carbon-gold rounded-2xl border border-carbon-light shadow-lg shadow-carbon-bronze/20"
            />
            <h1 className="text-2xl lg:text-2xl font-display">
              Built by Students
            </h1>
            <p className="text-xl mt-2">
              With the help of our academic advisors and the open source
              community, we&apos;re building Carbon Voyage using the latest
              technologies such as React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
