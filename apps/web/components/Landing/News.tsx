import Link from 'next/link';
import Image from 'next/image';

export default function News() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="bg-carbon-gold flex flex-col items-end lg:flex-row px-8 py-2 lg:py-8">
        <h1 className="text-carbon-bronze text-5xl mx-auto lg:mr-auto lg:ml-0 leading-8 font-bold mb-6 lg:mb-2">
          The News
        </h1>
        <Link
          href="/account"
          className="text-center mx-auto lg:ml-auto lg:mr-0 text-carbon-bronze underline"
        >
          View All Posts
        </Link>
      </div>
      <div className="bg-carbon-gold text-center lg:text-left flex flex-col gap-y-8 lg:gap-6 lg:flex-row items-center px-8 py-2 lg:py-8">
        <div className="basis-1/3">
          <Image src="/hero-banner.png" width={500} height={500} alt="news1" />
          <h2 className="text-2xl text-carbon-bronze font-semibold mt-4">
            Test 1
          </h2>
          <p className="text-xl text-carbon-bronze">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="basis-1/3">
          <Image src="/hero-banner.png" width={500} height={500} alt="news2" />
          <h2 className="text-2xl text-carbon-bronze font-semibold mt-4">
            Test 2
          </h2>
          <p className="text-xl text-carbon-bronze">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="basis-1/3">
          <Image src="/hero-banner.png" width={500} height={500} alt="news3" />
          <h2 className="text-2xl text-carbon-bronze font-semibold mt-4">
            Test 3
          </h2>
          <p className="text-xl text-carbon-bronze">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
