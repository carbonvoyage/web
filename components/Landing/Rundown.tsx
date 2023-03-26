import { useRef, useState } from 'react';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { Logo, Star } from '@assets/icons';

const Install = () => {
  return (
    <div className="w-max">
      <div className="flex felx-row p-4 space-x-4">
        <Logo className="bg-carbon-gold rounded-lg p-2" />
        <div>
          <h1>Carbon Voyage - Make purchases carbon-neutral.</h1>
          <p>carbonvoyage.org</p>
          <div className="flex flex-row space-x-1 pt-2">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5" />
            <p className="pl-1">42 Reviews</p>
          </div>
        </div>
      </div>

      <div style={{ transform: 'translateZ(60px)' }}></div>
    </div>
  );
};

const Shop = () => {
  return (
    <div style={{ transform: 'translateZ(60px)' }}>
      <Logo />
      Shop
    </div>
  );
};

const Offset = () => {
  return (
    <div style={{ transform: 'translateZ(60px)' }}>
      <Logo />
      Offset
    </div>
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
      <div className="mx-auto max-w-6xl flex flex-row">
        <div ref={ref} className="basis-1/2 py-12 px-8 -my-40">
          <div
            className={`h-screen relative duration-500 ${
              featured !== 'install' && 'text-carbon-bronze/50'
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <h1 className="text-3xl lg:text-5xl font-display">
                Install Our Extension
              </h1>
              <p className="text-xl mt-6">
                The Carbon Voyage extension is available on the Chrome Web Store
                and the Firefox Add-ons Store.
              </p>
            </div>
          </div>
          <div
            className={`relative duration-500 ${
              featured !== 'shop' && 'text-carbon-bronze/50'
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <h1 className="text-3xl lg:text-5xl font-display">
                Shop on Your Favorite Online Marketplaces
              </h1>
              <p className="text-xl mt-6">
                Order your favorite products on online marketplaces such as
                Amazon.com.
              </p>
            </div>
          </div>
          <div
            className={`h-screen relative duration-500 ${
              featured !== 'offset' && 'text-carbon-bronze/50'
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2">
              <h1 className="text-3xl lg:text-5xl font-display">
                Offset Your Emissions
              </h1>
              <p className="text-xl mt-6">
                Once your purchase is complete, we&apos;ll calculate the carbon
                offset needed to make the purchase carbon neutral.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 py-12 px-8 -my-40">
          <div className="w-80 h-screen m-auto sticky top-0">
            <div className="absolute top-1/2 -translate-y-1/2">
              <Tilt
                tiltAngleXManual={tiltPose[0]}
                tiltAngleYManual={tiltPose[1]}
                transitionSpeed={6000}
                perspective={500}
                trackOnWindow={true}
                className="w-80 h-80 overflow-hidden bg-white border border-carbon-bronze/20 shadow-2xl shadow-carbon-bronze/40 rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {(() => {
                  switch (featured) {
                    case 'install':
                      return <Install />;
                    case 'shop':
                      return <Shop />;
                    case 'offset':
                      return <Offset />;
                  }
                  // @ts-ignore TODO: Fix this
                }).call(this)}
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
