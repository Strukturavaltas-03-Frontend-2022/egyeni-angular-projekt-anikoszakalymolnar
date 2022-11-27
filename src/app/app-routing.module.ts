import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { Cat1Component } from './pages/cat1/cat1.component';
import { Cat2Component } from './pages/cat2/cat2.component';
import { Cat3Component } from './pages/cat3/cat3.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'legos',
    component: ProductsComponent,
  },
  {
    path: 'brickheadz',
    component: Cat1Component,
  },
  {
    path: 'minecraft',
    component: Cat2Component,
  },
  {
    path: 'supermario',
    component: Cat3Component,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
