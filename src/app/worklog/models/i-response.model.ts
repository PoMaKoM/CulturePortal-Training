import { IPerson } from './i-person.model';
import { IEvaluation } from './i-evaluation.model';

export interface IResponse {
  data: IPerson[];
  evaluation: IEvaluation[];
}
