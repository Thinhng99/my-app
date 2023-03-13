export interface Pagination {
  page: number;
  size: number;
  total?: number;
}

export interface Response<T = any> {
  data: T;
  status: number;
  message: string;
}

export interface SearchResult<T = any> {
  result: T;
  total: number;
}
