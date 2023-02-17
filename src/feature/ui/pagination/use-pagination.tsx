import { range } from '@/feature/common';
import { useMemo } from 'react';
import { useUncontrolled } from '../use-uncontrolled';

type UsePagination = {
  total: number;
  onChange?: (page: number) => void;
  initialPage?: number;
  page?: number;
  siblings?: number;
};

export const usePagination = ({
  total,
  initialPage = 1,
  page,
  onChange,
  siblings = 2,
}: UsePagination) => {
  if (total < 0) {
    throw Error('Total Page count is over 0');
  }
  const _total = Math.max(Math.trunc(total), 1);

  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: initialPage,
  });

  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > _total) {
      setActivePage(_total);
    } else {
      setActivePage(pageNumber);
    }
  };

  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(_total);

  const paginationRange = useMemo(() => {
    const paginationCount = siblings * 2 + 1;

    if (_total === 0) {
      return [];
    }

    if (_total <= paginationCount) {
      return range(1, _total);
    }

    const leftSiblingIndex = Math.max(
      Math.min(_total - paginationCount + 1, activePage - siblings),
      1
    );
    const rightSiblingIndex = Math.min(
      Math.max(paginationCount, activePage + siblings),
      _total
    );

    return range(leftSiblingIndex, rightSiblingIndex);
  }, [siblings, activePage, total]);

  return {
    paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last,
  };
};
