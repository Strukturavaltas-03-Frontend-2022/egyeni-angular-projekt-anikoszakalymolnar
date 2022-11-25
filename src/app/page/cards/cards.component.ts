import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { LegoService } from 'src/app/service/lego.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  productList$: Observable<Lego[]> = this.legoService.getAll();

  constructor(private legoService: LegoService) { }

  ngOnInit(): void {
  }

}
