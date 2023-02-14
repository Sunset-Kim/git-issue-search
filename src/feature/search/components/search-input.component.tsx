import debug from '@/feature/common/utils/debug-log';
import { ChangeEvent } from 'react';
import { debounce } from '../../common';
import { SearchResult } from '../schema';
import { useSearchService } from '../search.context';

const log = debug('Component|SearchInput:');

type Props = {
  onUpdate?: (result: SearchResult) => void;
};

export const SearchInput = ({ onUpdate }: Props) => {
  const service = useSearchService();

  const handleChange = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;
    const result = await service.searchWithQuery(e.target.value);
    log(result);

    onUpdate && onUpdate(result);
  }, 300);

  return <input type="text" onChange={handleChange} />;
};
