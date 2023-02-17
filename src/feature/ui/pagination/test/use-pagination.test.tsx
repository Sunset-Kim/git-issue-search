import { act, renderHook } from '@testing-library/react';
import 'jest';
import { usePagination } from '../use-pagination';

describe('use-pagination hook', () => {
  describe('Total < 0 일때', () => {
    it('hook throw Error', () => {
      expect(() => {
        renderHook(() => usePagination({ total: 0 }));
      }).toThrow();
    });
  });

  describe('Total === 0 일때', () => {
    it('hook throw Error', () => {
      const { result } = renderHook(() => usePagination({ total: 1 }));
      console.log(result.current.paginationRange);
    });
  });

  describe('Total > 0 일때', () => {
    it('Page Rnage를 리턴하고 next,previous,last,first 로 현재페이지를 변경할 수 있다', () => {
      const { result } = renderHook(() => usePagination({ total: 5 }));

      expect(result.current.paginationRange).toEqual([1, 2, 3, 4, 5]);
      expect(result.current.active).toBe(1);

      act(() => result.current.next());
      expect(result.current.active).toBe(2);

      act(() => result.current.previous());
      expect(result.current.active).toBe(1);

      act(() => result.current.last());
      expect(result.current.active).toBe(5);

      act(() => result.current.first());
      expect(result.current.active).toBe(1);
    });

    it('OverFlow가 발생하면 1, total의 최소 최대값을 보장한다', () => {
      const { result } = renderHook(() => usePagination({ total: 5 }));

      act(() => result.current.setPage(-1));
      expect(result.current.active).toBe(1);

      act(() => result.current.setPage(100));
      expect(result.current.active).toBe(5);
    });
  });
});
