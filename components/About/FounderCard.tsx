import Image from 'next/image';
import { FunctionComponent } from 'react';

import { IFounder } from 'types';

const FounderCard: FunctionComponent<IFounder> = ({
  name,
  role,
  className
}) => {
  return (
    <div className={`mb-8 h-64 relative flex justify-center ${className}`}>
      <div className="h-72 w-64 absolute bg-carbon-gold rounded-md"></div>

      <div className="absolute w-max bg-carbon-bronze text-carbon-gold px-8 py-4 bottom-[-30px] right-[-10px] rounded-md">
        <h2 className="uppercase font-bold">{name}</h2>
        <h3>{role}</h3>
      </div>
    </div>
  );
};

export default FounderCard;
