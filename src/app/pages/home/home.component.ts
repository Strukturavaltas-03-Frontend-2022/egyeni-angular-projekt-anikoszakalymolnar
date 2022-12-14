import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list$: Observable<Lego[]> = this.productService.getAll();
  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
  }

}
