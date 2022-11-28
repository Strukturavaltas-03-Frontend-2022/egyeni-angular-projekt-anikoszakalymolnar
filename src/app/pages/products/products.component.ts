import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list$: Observable<Lego[]> = this.productService.getAll();

  priceOrder: boolean = true;
  stockFilter: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onNew() {
    this.router.navigate(['edit', 0]);
  }
}
