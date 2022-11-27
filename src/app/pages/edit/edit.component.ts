import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Lego } from 'src/app/model/lego';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  lego$: Observable<Lego> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id'] == 0) return of(new Lego());
      return this.productService.get(params['id']);
    })
  );

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdate(eventForm: NgForm, lego: Lego): void {
    if (lego.id == 0)
      this.productService.create(lego).subscribe(
        event => this.router.navigate(['legos']));
    else this.productService.update(lego).subscribe(
      event => this.router.navigate(['legos']));

  }
}
