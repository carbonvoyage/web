import Button from '@components/Button';

import { useAuthModal } from '@context/useAuthModal';

import Receipt from './Receipt';

export default function Hero() {
  const [_isOpen, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  return (
    <section className="mx-auto max-w-2xl lg:max-w-6xl h-screen flex flex-col lg:flex-row items-center px-8 py-2 md:py-8">
      <div className="text-carbon-bronze basis-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-display">
          Your way to make online purchases carbon-neutral.
        </h1>
        <div className="text-xl mt-6">
          <p>
            Carbon Voyage makes it easy to offset your carbon footprint from
            online purchases. Quickly discover the carbon produced by your cart,
            and offset it with a single click.
          </p>
          <Button
            size="large"
            className="mt-4"
            onClick={() => {
              setIsAuthModalOpen(true), setAuthModalView('sign_up');
            }}
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="basis-1/2">
        <Receipt />
      </div>
    </section>
  );
}
