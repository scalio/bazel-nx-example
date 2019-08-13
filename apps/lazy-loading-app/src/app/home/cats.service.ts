import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICat, ICreateCatDto } from '@proto-interface';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICat[]> {
    return this.http.get<ICat[]>(`${this.apiUrl}/cats`);
  }

  getById(id: number): Observable<ICat> {
    return this.http.get<ICat>(`${this.apiUrl}/cats/${id}`);
  }

  create(createCatDto: ICreateCatDto): Observable<ICat> {
    return this.http.post<ICat>(`${this.apiUrl}/cats`, createCatDto);
  }

  delete(id: number): Observable<ICat> {
    return this.http.delete<ICat>(`${this.apiUrl}/cats/${id}`);
  }
}
