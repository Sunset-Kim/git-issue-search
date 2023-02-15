import type { AxiosInstance } from 'axios';
import type { SearchResult } from './schema';

interface SearchOption {
  page?: number;
  per_page?: number;
}

const defaultSearchOption: Required<SearchOption> = {
  page: 1,
  per_page: 30,
};

export class SearchService {
  httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async searchWithQuery(q: string, opt?: SearchOption) {
    const option = opt
      ? { ...defaultSearchOption, ...opt }
      : defaultSearchOption;

    const { page, per_page } = option;

    if (per_page > 100) {
      console.warn('per_page is max 100, set under 100');
    }

    const res = await this.httpClient.request<SearchResult>({
      method: 'GET',
      url: '/search/repositories',
      params: {
        q,
        page,
        per_page: Math.min(100, per_page),
      },
    });

    return res.data;
  }
}
