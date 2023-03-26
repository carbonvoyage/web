import Tilt from 'react-parallax-tilt';

import { Barcode, Logo } from '@assets/icons';

const Receipt = () => {
  return (
    <div className="relative">
      <Logo className="absolute scale-[5] rotate-[260deg] top-40 left-24 w-20 p-2" />
      <Logo className="absolute scale-[7] rotate-[15deg] top-80 right-24 w-20 p-2" />
      <Tilt
        className="w-80 m-auto"
        scale={1.1}
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        tiltAngleXInitial={8}
        tiltAngleYInitial={8}
        transitionSpeed={6000}
        glareEnable={false}
      >
        <div className="relative bg-white w-80 overflow-hidden text-black rounded-lg shadow-2xl shadow-carbon-bronze/40">
          <div className="relative z-10 p-4">
            <div className="flex space-x-4 pt-2">
              <Logo className="p-1" fill="black" />
              <div>
                <h1 className="text-xl">Carbon Offset Receipt</h1>
                <h2 className="text-neutral-500 -mt-1">
                  Amazon.com <span>·</span> 3-18-23
                </h2>
              </div>
            </div>
            <div className="pt-4">
              <p className="mb-2">Hey John Chapman,</p>
              <p className="mb-4 leading-6">
                Thank you for offsetting your cart&apos;s <br />
                carbon footprint by donating{' '}
                <span className="font-bold">$9.42</span> to <br /> the Arbor Day
                Foundation.
              </p>
              <h2 className="text-lg font-bold text-center">
                Your Cart&apos;s Offset
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Offset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Apple Seeds</td>
                    <td>$12.95</td>
                    <td>$0.92</td>
                  </tr>
                  <tr>
                    <td>Dogfennel Seeds</td>
                    <td>$9.99</td>
                    <td>$0.69</td>
                  </tr>
                  <tr>
                    <td>Organic Fertilizer</td>
                    <td>$19.99</td>
                    <td>$3.39</td>
                  </tr>
                  <tr>
                    <td>Organic Potting Soil</td>
                    <td>$16.99</td>
                    <td>$2.89</td>
                  </tr>
                  <tr>
                    <td>Garden Hand Trowel</td>
                    <td>$7.89</td>
                    <td>$1.53</td>
                  </tr>
                  <tr className="font-bold border-t border-neutral-400/30">
                    <td>Total:</td>
                    <td>$67.81</td>
                    <td>$9.42</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-neutral-500 text-xs text-center mt-2 -mb-4">
                * This is an example receipt. Offset calculations are not
                representative of actual calculations.
              </p>
            </div>
          </div>
          <Barcode className="w-full p-1" />
          <p
            aria-hidden="true"
            className="absolute text-neutral-500/10 text-3xl top-0 right-0 translate-y-52 translate-x-14 rotate-90"
          >
            001800032023
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default Receipt;
