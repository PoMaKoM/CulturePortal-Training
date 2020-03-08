import { IWorklog } from './work.model';

export interface IPerson {
  name: string;
  worklog: IWorklog[];
}
