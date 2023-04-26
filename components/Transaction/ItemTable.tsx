import { useState } from 'react';

import { Product } from 'types';

import { ChevronDown, ChevronUp } from '@assets/icons';

const ItemTable = ({ product_data }: { product_data: Product[] }) => {
  const [activeProducts, setActiveProducts] = useState<string[]>([]);

  const handleDetailToggle = (clickedProduct: string) => {
    if (activeProducts.includes(clickedProduct)) {
      setActiveProducts(
        activeProducts.filter((item) => item !== clickedProduct)
      );
    } else {
      setActiveProducts((prevProducts) => [...prevProducts, clickedProduct]);
    }
  };

  return (
    <div className="bg-carbon-white overflow-x-auto rounded-md border border-carbon-bronze">
      <table className="w-full table-fixed sm:table-auto">
        <thead className="bg-carbon-bronze text-lg">
          <tr className="text-carbon-gold text-left">
            <th className="p-3 sm:p-5">Product Name</th>
            <th className="p-3 sm:p-5">Price</th>
            <th className="p-3 sm:p-5">Offset</th>
            <th className="p-3 sm:p-5">Details</th>
          </tr>
        </thead>
        <tbody>
          {product_data?.map((product, index) => {
            const { title, weight, height, width, materials, price, offset } =
              product;
            return (
              <tr
                className={`border-b border-carbon-bronze border-opacity-50 ${
                  index % 2 && 'bg-carbon-light'
                }`}
                onClick={() => handleDetailToggle(title)}
                key={title}
              >
                <td className="p-3">
                  {activeProducts.includes(title) ? (
                    <div className="flex flex-col space-y-2">
                      <p>{title}</p>
                      <span className="text-sm">
                        Weight: {weight ? `${weight} lbs.` : 'N/A'}
                      </span>
                      <span className="text-sm">
                        {' '}
                        Height: {height ? `${height} in.` : 'N/A'}
                      </span>
                      <span className="text-sm">
                        {' '}
                        Width: {width ? `${width} in.` : 'N/A'}
                      </span>
                      <span className="text-sm mt-2">
                        Materials:
                        <ul className="list-disc">
                          {materials
                            ? materials.map((material) => {
                                return (
                                  <li key={material} className="ml-4">
                                    {material}
                                  </li>
                                );
                              })
                            : 'N/A'}
                        </ul>
                      </span>
                    </div>
                  ) : (
                    product.title
                  )}
                </td>
                <td className="p-5">${price}</td>
                <td className="p-5">${offset}</td>
                <td className="p-5">
                  {activeProducts.includes(title) ? (
                    <ChevronUp className="" />
                  ) : (
                    <ChevronDown className="" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
