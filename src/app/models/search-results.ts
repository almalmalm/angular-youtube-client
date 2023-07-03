import { ISearchItems } from './search-items';

export interface SearchResults {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<ISearchItems>;
}
