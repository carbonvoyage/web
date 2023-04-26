import { useRef, useState } from 'react';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import {
  Amazon,
  ChevronLeft,
  ChevronRight,
  Chrome,
  Cursor,
  Ebay,
  Edge,
  Firefox,
  Logo,
  Star,
  Walmart
} from '@assets/icons';

import Receipt from './Receipt';

const Install = () => {
  return (
    <>
      <div className="w-full absolute top-1/2 -translate-y-1/2 -translate-x-0.5 lg:translate-x-0 overflow-hidden no-select">
        <div className="w-max">
          <div className="flex flex-row space-x-1 px-6 py-4 text-carbon-bronze/80">
            <p>Home</p>
            <ChevronRight className="w-4 h-4 mt-1" />
            <p>Extensions</p>
            <ChevronRight className="w-4 h-4 mt-1" />
            <p>Carbon Voyage</p>
          </div>
          <div className="flex flex-row px-6 space-x-4">
            <Logo className="bg-carbon-gold border border-carbon-light shadow-lg shadow-carbon-bronze/20 rounded-lg p-3 w-16 h-16" />
            <div>
              <div className="py-2">
                <h1 className="leading-7">
                  Carbon Voyage: Make purchases carbon-neutral.
                </h1>
                <p className="underline text-sm text-carbon-bronze/80">
                  carbonvoyage.org
                </p>
              </div>
              <div className="flex flex-row space-x-1 pt-2">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5" />
                <div className="pl-2 leading-5 text-sm flex flex-row space-x-2">
                  <p className="underline">42 Reviews</p>
                  <span>|</span>
                  <p className="underline">Shopping</p>
                </div>
              </div>
              <div className="bg-carbon-bronze/60 text-carbon-white rounded-xl mt-4 py-2 px-6 w-fit">
                Install Extension
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className="absolute -top-2 scale-110 left-1/2 -translate-x-1/2 lg:scale-100 lg:translate-x-0 lg:top-3 lg:left-3 fill-current flex flex-row space-x-3">
          <Chrome className="w-14 h-14" />
          <Firefox className="w-14 h-14" />
          <Edge className="w-14 h-14" />
        </div>
        <Cursor className="absolute top-60 left-56 -translate-y-0.5 w-8 h-8" />
      </div>
    </>
  );
};

const Shop = () => {
  return (
    <>
      <div className="w-full absolute top-1/2 -translate-y-1/2 overflow-hidden no-select">
        <div className="w-max p-6">
          <div className="flex flex-row space-x-1 mb-2 text-carbon-bronze/80">
            <ChevronLeft className="w-4 h-4 mt-1" />
            <p>Back to Results</p>
          </div>
          <h1>Garden Trowel - Heavy Duty Carbon Steel</h1>
          <p className="text-sm text-carbon-bronze/80">
            Brand: Appleseed Home & Garden
          </p>
          <div className="flex flex-row space-x-1 pt-2">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <p className="pl-2 text-sm underline">4,269 Ratings</p>
          </div>
          <p className="py-2 text-base">
            In Stock
            <span className="leading-none mx-1">·</span>
            Prime <span className="text-carbon-bronze/80">One-Day</span>
          </p>
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row space-x-0.5 translate-y-1 mr-6">
              <p className="relative top-px">$</p>
              <p className="text-3xl">8</p>
              <p className="relative top-px">99</p>
            </div>
            <div className="bg-carbon-bronze/60 text-carbon-white rounded-xl py-2 px-6 w-fit">
              Add to Cart
            </div>
            <div className="bg-carbon-bronze/60 text-carbon-white rounded-xl py-2 px-6 w-fit">
              Buy Now
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 overflow-auto"
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className="absolute top-3 right-3 fill-current flex flex-row space-x-3">
          <Amazon className="w-14 h-14" />
          <Ebay className="w-14 h-14 p-1 rounded-xl bg-carbon-bronze fill-carbon-white scale-90" />
          <Walmart className="w-14 h-14" />
        </div>
        <Cursor
          style={{ transform: 'scale(-1, 1)' }}
          className="absolute top-58 left-24 w-8 h-8"
        />
      </div>
    </>
  );
};

export default function Rundown() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref
  });
  const [tiltPose, setTiltPose] = useState([6, -12]);
  const [featured, setFeatured] = useState<'install' | 'shop' | 'offset'>(
    'install'
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.2) {
      setFeatured('install');
      setTiltPose([6, -12]);
    } else if (latest >= 0.2 && latest < 0.8) {
      setFeatured('shop');
      setTiltPose([6, 12]);
    } else if (latest >= 0.8) {
      setFeatured('offset');
      setTiltPose([0, 0]);
    }
  });

  return (
    <section className="bg-carbon-gold">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row py-6">
        <div
          ref={ref}
          className="basis-1/2 py-12 px-8 lg:-my-40 space-y-12 lg:space-y-0"
        >
          <div
            className={`lg:h-screen relative duration-500 ${
              featured !== 'install' && 'lg:text-carbon-bronze/50'
            }`}
          >
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-display">
                Install Our Extension
              </h1>
              <p className="mt-2 lg:mt-6">
                The Carbon Voyage extension is available on the Chrome Web Store
                and the Firefox Add-ons Store.
              </p>
            </div>
          </div>
          <div
            className={`relative duration-500 ${
              featured !== 'shop' && 'lg:text-carbon-bronze/50'
            }`}
          >
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-display">
                Shop on Your Favorite Online Marketplaces
              </h1>
              <p className="mt-2 lg:mt-6">
                Order your favorite products on online marketplaces such as
                Amazon.com.
              </p>
            </div>
          </div>
          <div
            className={`lg:h-screen relative duration-500 ${
              featured !== 'offset' && 'lg:text-carbon-bronze/50'
            }`}
          >
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-display">
                Offset Your Emissions
              </h1>
              <p className="mt-2 lg:mt-6">
                Once your purchase is complete, we&apos;ll calculate the carbon
                offset needed to make the purchase carbon neutral.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 order-first lg:order-last py-8 lg:py-12 px-8 lg:-my-40">
          <div className="h-full lg:h-screen m-auto sticky top-0">
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2">
              <Tilt
                tiltAngleXManual={tiltPose[0]}
                tiltAngleYManual={tiltPose[1]}
                transitionSpeed={6000}
                perspective={500}
                trackOnWindow={true}
                className="hidden lg:static w-80 h-80 bg-carbon-white border border-carbon-bronze/20 shadow-xl shadow-carbon-bronze/40 rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {(() => {
                  switch (featured) {
                    case 'install':
                      return <Install />;
                    case 'shop':
                      return <Shop />;
                    case 'offset':
                      return <Receipt />;
                  }
                  // @ts-ignore TODO: Fix this
                }).call(this)}
              </Tilt>
              <div className="lg:hidden overflow-hidden h-80 bg-carbon-white border border-carbon-bronze/20 shadow-xl shadow-carbon-bronze/20 rounded-2xl">
                <Install />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
