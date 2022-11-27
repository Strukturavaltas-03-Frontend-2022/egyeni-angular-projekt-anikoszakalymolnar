import { Component, Input, OnInit } from '@angular/core';
import { Lego } from 'src/app/model/lego';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.scss']
})
export class ListerComponent implements OnInit {

  @Input() list: Lego[] = [];
  @Input() cardperpage: number = 20;
  @Input() bigCard: boolean = true;

  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
