import Link from 'next/link';

export default function StatisticsCard() {
  return (
    <div className="bg-carbon-white rounded-b-lg row-span-2 col-span-6">
      <div className="p-4 bg-carbon-bronze rounded-t-lg flex items-center">
        <span className="text-2xl text-carbon-gold">Recent Activity</span>
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <Link href="/">Edit Payment Info</Link>
        <Link href="/">Change Account Info</Link>
        <Link href="/">Close your account</Link>
        <Link href="/">See Connected Devices</Link>
      </div>
    </div>
  );
}
