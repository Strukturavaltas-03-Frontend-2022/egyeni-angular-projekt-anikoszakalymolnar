import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() country: Country = new Country;

  constructor() { }

  ngOnInit(): void {
  }

}
