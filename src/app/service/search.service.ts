import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
