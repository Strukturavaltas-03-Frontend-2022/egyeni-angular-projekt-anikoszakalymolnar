import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lego } from '../model/lego';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;

  LegoEntityName: string = 'legos';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Lego[]> {
    return this.http.get<Lego[]>(`${this.apiUrl}${this.LegoEntityName}`);
  }

  get(id: number): Observable<Lego> {
    return this.http.get<Lego>(`${this.apiUrl}${this.LegoEntityName}/${id}`);
  }

  create(lego: Lego): Observable<Lego> {
    return this.http.post<Lego>(`${this.apiUrl}${this.LegoEntityName}`,
      lego
    );
  }

  update(lego: Lego): Observable<Lego> {
    return this.http.patch<Lego>(`${this.apiUrl}${this.LegoEntityName}/${lego.id}`,
      lego
    );
  }

  delete(lego: Lego): Observable<Lego> {
    return this.http.delete<Lego>(`${this.apiUrl}${this.LegoEntityName}/${lego.id}`
    );
  }
}
