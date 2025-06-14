import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProgramsData} from "./program.model";

@Injectable()
export class ProgramService {
  constructor(private http: HttpClient) {
  }

  public getLearningModules(): Observable<ProgramsData> {
    return this.http.get<ProgramsData>('assets/data/modules.json');
  }
}
