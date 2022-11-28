import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() lego: Lego = new Lego();
  @Input() bigCard: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.productService.delete(this.lego)
      .subscribe(event => this.router.navigate(['']));
  }

  onEdit() {
    this.router.navigate(['edit', this.lego.id]);
  }

  onShow() {
    this.router.navigate(['lego', this.lego.id]);
  }

}
