import { FunctionComponent } from 'react';

import Tilt from 'react-parallax-tilt';

import { Barcode, Logo } from '@assets/icons';

const Receipt = () => {
  return (
    <div className="relative w-full h-80 overflow-hidden lg:-translate-y-0.5 no-select">
      <div className="relative z-10 p-4">
        <div className="flex space-x-4 pt-2">
          <Logo className="p-1" fill="#7d671f" />
          <div>
            <h1>Carbon Offset Receipt</h1>
            <h2 className="text-carbon-bronze/60 -mt-1">
              Amazon.com <span>·</span> 3-18-23
            </h2>
          </div>
        </div>
        <div className="pt-4">
          <h2 className="text-lg font-bold text-center">
            Your Cart&apos;s Offset
          </h2>
          <table className="w-full text-base">
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
                <td>Garden Trowel - Heavy...</td>
                <td>$8.99</td>
                <td>$1.72</td>
              </tr>
              <tr className="font-bold border-t border-carbon-bronze/20">
                <td>Total:</td>
                <td>$21.94</td>
                <td>$2.64</td>
              </tr>
            </tbody>
          </table>
          <p className="text-carbon-bronze/60 text-xs text-center mt-2 -mb-6">
            * This is an example receipt. Offset calculations are not
            representative of actual calculations.
          </p>
        </div>
      </div>
      <Barcode className="w-full p-1 mt-2" fill="#7d671f" />
    </div>
  );
};

export default Receipt;
