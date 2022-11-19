import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiUrl: string = environment.apiUrl;

  countryEntityName: string = 'countries';


  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}${this.countryEntityName}`);
  }

  get(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}${this.countryEntityName}/${id}`);
  }

  create(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.apiUrl}${this.countryEntityName}`,
      country
    );
  }

  update(country: Country): Observable<Country> {
    return this.http.patch<Country>(`${this.apiUrl}${this.countryEntityName}/${country.id}`,
      country
    );
  }

  delete(country: Country): Observable<Country> {
    return this.http.delete<Country>(`${this.apiUrl}${this.countryEntityName}/${country.id}`
    );
  }

}
