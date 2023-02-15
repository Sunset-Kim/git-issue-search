import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { usePagination } from './use-pagination';

type Props = {
  total: number;
  page?: number;
  initialPage?: number;
  onChange?: (page: number) => void;
};

export function Pagination({ page, total, initialPage, onChange }: Props) {
  const { next, previous, active, first, last, setPage, paginationRange } =
    usePagination({ total, page, initialPage, onChange });

  console.log(active === 1);
  return (
    <ButtonGroup>
      <IconButton
        size="xs"
        aria-label="go first page"
        onClick={() => first()}
        isDisabled={active === 1}
        icon={<ArrowLeftIcon />}
      />
      <IconButton
        size="xs"
        onClick={() => previous()}
        aria-label="go prev page"
        isDisabled={active === 1}
        icon={<ChevronLeftIcon boxSize={5} />}
      />

      {paginationRange.map((num) => (
        <Button
          key={`pagination ${num}`}
          size={'xs'}
          bgColor={num === active ? 'linkedin.400' : undefined}
          color={num === active ? 'white' : undefined}
          onClick={() => setPage(num)}
        >
          {num}
        </Button>
      ))}

      <IconButton
        size="xs"
        onClick={() => next()}
        aria-label="go next page"
        isDisabled={active === total}
        icon={<ChevronRightIcon boxSize={5} />}
      />
      <IconButton
        size="xs"
        onClick={() => last()}
        isDisabled={active === total}
        aria-label="go last page"
        icon={<ArrowRightIcon />}
      />
    </ButtonGroup>
  );
}
