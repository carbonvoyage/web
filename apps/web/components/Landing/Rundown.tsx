import { Logo } from 'icons';
import s from './Landing.module.css';

export default function Rundown() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="bg-carbon-gold flex flex-col lg:flex-row items-center px-8 py-2 lg:py-8">
        <div
          className={`${s.steps} text-carbon-bronze basis-1/2 text-center lg:text-left leading-8`}
        >
          <h1 className="mt-8 text-3xl lg:text-5xl font-bold">How It Works</h1>
          <h2 className="mb-8 text-xl lg:text-3xl font-semibold">
            Lorem ipsum dolor sitamet.
          </h2>
          <div className="w-full lg:w-max divide-y divide-carbon-bronze">
            <div>
              <h3>01 Install</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
              <h3>02 Shop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
              <h3>03 Save</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 lg:order-first">
          <Logo
            className="mx-auto"
            style={{ width: '200px', height: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}
