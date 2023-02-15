import { Owner } from './owner.schema';

export interface SearchResultItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: false;
  owner: Owner;
  html_url: string;
  description: string;
  fork: false;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string;
  has_issues: true;
  visibility: string;
  forks: number;
  open_issues: number;
}

export interface SearchResult {
  total_count: number;
  incomplete_results: true;
  items: SearchResultItem[];
}
