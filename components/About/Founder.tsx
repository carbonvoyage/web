import Image from 'next/image';
import { FunctionComponent } from 'react';

import { IFounder } from 'types';

const Founder: FunctionComponent<IFounder> = ({ name, role }) => {
  return (
    <div className="mb-8 h-64 relative flex justify-center">
      <div className="h-64 w-64 absolute">
        <Image
          src="/hero-banner.png"
          fill
          alt="founder"
          className="rounded-full mx-auto inset-0 border border-carbon-bronze"
        />
      </div>

      <div className="absolute w-64 bg-carbon-bronze text-carbon-gold px-8 py-4 bottom-[-20px] rounded-t-lg">
        <h2 className="uppercase font-bold">{name}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};

export default Founder;
