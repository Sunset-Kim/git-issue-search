import type { Owner } from '@/feature/search/schema';

export interface Issue {
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: Owner;
  labels: [];
  state: string;
  locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null | string;
}
