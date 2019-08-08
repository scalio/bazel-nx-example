import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatModel, ICreateCatDto } from '@app/api-interface';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CatModel[]> {
    return this.http.get<CatModel[]>(`${this.apiUrl}/cats`);
  }

  getById(id: number): Observable<CatModel> {
    return this.http.get<CatModel>(`${this.apiUrl}/cats/${id}`);
  }

  create(createCatDto: ICreateCatDto): Observable<CatModel> {
    return this.http.post<CatModel>(`${this.apiUrl}/cats`, createCatDto);
  }

  delete(id: number): Observable<CatModel> {
    return this.http.delete<CatModel>(`${this.apiUrl}/cats/${id}`);
  }
}
