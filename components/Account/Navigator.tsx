import Link from 'next/link';

import { CircleMinus, Connections, UserPen } from 'assets/icons';
import { useUser } from 'context/useUser';

const Navigator = () => {
  const { userDetails } = useUser();

  return (
    <div className="bg-carbon-white rounded-lg basis-1/3 border overflow-hidden border-carbon-bronze h-fit">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <div className="flex flex-col">
          <span className="text-xl text-carbon-gold font-semibold">
            {`${userDetails?.first_name} ${userDetails?.last_name}`}
          </span>
          <span className="text-md text-carbon-gold">
            Your Personal Account
          </span>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-5 cursor-pointer">
        <div className="space-x-2">
          <UserPen
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <Link href="/account">Edit Account Information</Link>
        </div>

        <div className="space-x-2">
          <Connections
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <Link href="/account">Connected Devices</Link>
        </div>
        <div className="space-x-2 cursor-pointer">
          <CircleMinus
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <Link href="/account/close">Close your account</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
