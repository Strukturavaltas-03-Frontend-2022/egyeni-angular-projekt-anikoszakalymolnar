import { Component, Input, OnInit } from '@angular/core';
import { Lego } from 'src/app/model/lego';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() lego: Lego = new Lego;

  constructor() { }

  ngOnInit(): void {
  }

}
