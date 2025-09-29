import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { partidoMundial } from '../models/partido-mundial.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PartidosMundial {
  private baseUrl = environment.apiUrl + '/partidos-mundial';

  constructor(private http: HttpClient) { }

  getUnPartido(): Observable<partidoMundial[]> {
    return this.http.get<partidoMundial[]>(`${this.baseUrl}/un-partido`);
  }

}
