import axios from 'axios';
import { githubApiConfig } from '../configs';

const { headers, baseURL } = githubApiConfig;

export const githubAxios = axios.create({
  headers,
  baseURL,
});
