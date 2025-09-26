import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { partidoUCL } from '../models/partido-ucl.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PartidosUCL {
  private baseUrl = environment.apiUrl + '/partidos-ucl';

  constructor(private http: HttpClient) { }

  getUnPartido(): Observable<partidoUCL[]> {
    return this.http.get<partidoUCL[]>(`${this.baseUrl}/un-partido`);
  }

}
