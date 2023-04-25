import Link from 'next/link';

import { CircleMinus, Connections, UserPen } from 'assets/icons';

const MobileNavigator = () => {
  return (
    <div className="text-sm font-medium text-carbon-bronze border-b border-opacity-40 border-carbon-bronze px-2 mb-8">
      <ul className="flex flex-wrap justify-around items-end">
        <li className="mr-2">
          <Link href="/account" className="inline-flex py-4 border-carbon-gold">
            <UserPen
              height="20px"
              width="20px"
              className=" fill-carbon-bronze inline-block mr-2"
            />
            Edit
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="/account"
            className="inline-flex py-4 "
            aria-current="page"
          >
            <Connections
              height="20px"
              width="20px"
              className="fill-carbon-bronze inline-block mr-2"
            />
            Devices
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/account/close" className="inline-flex py-4">
            <CircleMinus
              height="20px"
              width="20px"
              className="fill-carbon-bronze inline-block mr-2"
            />
            Close
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigator;
