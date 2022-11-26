import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat3',
  templateUrl: './cat3.component.html',
  styleUrls: ['./cat3.component.scss']
})
export class Cat3Component implements OnInit {

  list$: Observable<Lego[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
