import { Logo } from 'icons';

export default function Mission() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="bg-carbon-gold flex flex-col md:flex-row items-center py-2 md:py-8">
        <div className="text-carbon-bronze basis-1/2 text-center lg:text-left">
          <h1 className="mt-8 text-3xl md:text-7xl font-bold">Our Mission</h1>
          <h2 className="mb-8 text-xl md:text-3xl font-semibold">
            Lorem ipsum dolor sitamet.
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            arcu quis urna malesuada, quis auctor magna tempor. Praesent non
            fringilla nibh.
          </p>
          <button
            type="button"
            className="bg-carbon-bronze rounded-full p-4 w-56 text-carbon-gold text-xl mt-8"
          >
            Act Now
          </button>
        </div>
        <div className="basis-1/2">
          <Logo
            className="mx-auto"
            style={{ width: '200px', height: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}
