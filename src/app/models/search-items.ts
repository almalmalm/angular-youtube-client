import { ISnippet } from './snippet';
import { IStatistics } from './statistics';

export interface ISearchItems {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
