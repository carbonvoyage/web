import { CircleMinus, Connections, CreditCard, UserPen } from 'assets/icons';

const Navigator = () => {
  return (
    <div className="bg-carbon-white rounded-b-lg basis-1/3 h-fit">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="rounded-full w-10 h-10 bg-carbon-gold mr-4"></span>
        <div className="flex flex-col">
          <span className="text-xl text-carbon-gold font-semibold">
            Joe Acme
          </span>
          <span className="text-md text-carbon-gold">
            Your Personal Account
          </span>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-5">
        <div className="space-x-2">
          <UserPen
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <span className="">Edit Account Information</span>
        </div>
        <div className="space-x-2">
          <CreditCard
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <span className="">Edit Payment Information</span>
        </div>
        <div className="space-x-2">
          <Connections
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <span className="">Connected Devices</span>
        </div>
        <div className="space-x-2">
          <CircleMinus
            height="30px"
            width="30px"
            className="p-1 fill-carbon-bronze inline-block"
          />
          <span className="">Close your account</span>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
