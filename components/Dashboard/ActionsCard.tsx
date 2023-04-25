import Link from 'next/link';

export default function ActionsCard() {
  return (
    <div className="bg-carbon-white rounded-b-lg h-fit col-span-3 lg:col-span-2">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="text-2xl text-carbon-gold">Account Actions</span>
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <Link href="/account">Change Account Info</Link>
        <Link href="/account/close">Close your account</Link>
        <Link href="/account">See Connected Devices</Link>
      </div>
    </div>
  );
}
