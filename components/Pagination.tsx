import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
  total_count: number;
  limit: number;
  start: number;
  end: number;
  setStart: Dispatch<SetStateAction<number>>;
};

const Pagination = ({
  total_count,
  start,
  end,
  limit,
  setStart
}: PaginationProps) => {
  const handleNext = () => {
    if (start + limit > total_count) {
      setStart(total_count - start);
    } else {
      setStart(start + limit);
    }
  };
  const handlePrev = () => {
    if (start - limit < 0) {
      setStart(0);
    } else {
      setStart(start - limit);
    }
  };
  return (
    <div className="flex flex-col items-center p-2">
      <span className="text-sm text-carbon-bronze">
        Showing{' '}
        <span className="font-semibold ">{total_count ? start + 1 : 0}</span> to{' '}
        <span className="font-semibold">{total_count ? end : 0}</span> of{' '}
        <span className="font-semibold">{total_count}</span> Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0 ">
        <button
          className="px-4 py-2 text-sm font-medium text-carbon-white bg-carbon-bronze rounded-l border-r-2 border-carbon-white"
          disabled={start === 0}
          onClick={() => handlePrev()}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-carbon-white bg-carbon-bronze rounded-r"
          disabled={end === total_count}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
