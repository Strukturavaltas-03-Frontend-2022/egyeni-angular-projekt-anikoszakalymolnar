import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  phrase: FormControl = new FormControl('');

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.phrase.valueChanges.subscribe(
      actualValue => this.searchService.searchPhrase$.next(actualValue)
    )
  }

}
