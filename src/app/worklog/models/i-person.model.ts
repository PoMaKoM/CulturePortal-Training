import { IWorklog } from './i-work.model';

export interface IPerson {
  name: string;
  worklog: IWorklog[];
}
