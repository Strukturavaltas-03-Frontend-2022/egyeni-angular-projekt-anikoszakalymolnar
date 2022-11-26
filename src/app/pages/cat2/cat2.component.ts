import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat2',
  templateUrl: './cat2.component.html',
  styleUrls: ['./cat2.component.scss']
})
export class Cat2Component implements OnInit {

  list$: Observable<Lego[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }


}
