import Button from '@components/Button';

import { useAuthModal } from '@context/useAuthModal';

import { Logo } from '@assets/icons';

import Receipt from './Receipt';
import { MiniReceipt } from './Receipt';

export default function Hero() {
  const [_isOpen, setIsAuthModalOpen, _view, setAuthModalView] = useAuthModal();

  return (
    <section className="mx-auto max-w-2xl lg:max-w-6xl lg:h-hero flex flex-col lg:flex-row items-center px-8 md:pb-8">
      <div className="text-carbon-bronze basis-1/2 pt-12 pb-20 md:py-0">
        <h1 className="text-3xl lg:text-6xl font-display">
          Your way to make online purchases carbon-neutral.
        </h1>
        <div className="mt-6">
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
      <div className="basis-1/2 hidden lg:block">
        <Receipt />
      </div>
      <div className="basis-1/2 py-8 block lg:hidden order-first relative">
        <Logo className="absolute scale-[3] rotate-[260deg] top-24 left-0 w-10" />
        <Logo className="absolute scale-[3] rotate-[15deg] bottom-24 right-0 w-10" />
        <MiniReceipt />
      </div>
    </section>
  );
}
