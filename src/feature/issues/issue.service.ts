import type { AxiosInstance } from 'axios';
import { Issue } from './schema';

export class IssueService {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async getIssues({ repositoryName }: { repositoryName: string }) {
    const res = await this.httpClient.request<Issue[]>({
      method: 'GET',
      url: `/repos/${repositoryName}/issues`,
    });

    return res.data;
  }
}
