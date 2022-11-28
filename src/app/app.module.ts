import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './common/card/card.component';
import { Cat1Component } from './pages/cat1/cat1.component';
import { Cat2Component } from './pages/cat2/cat2.component';
import { Cat3Component } from './pages/cat3/cat3.component';
import { EditComponent } from './pages/edit/edit.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListerComponent } from './common/lister/lister.component';
import { PriceorderPipe } from './pipe/priceorder.pipe';
import { AvailablestockPipe } from './pipe/availablestock.pipe';
import { CalcdiscontPipe } from './pipe/calcdiscont.pipe';
import { TopstarsPipe } from './pipe/topstars.pipe';
import { LegoComponent } from './pages/lego/lego.component';
import { RandomPipe } from './pipe/random.pipe';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    Cat1Component,
    Cat2Component,
    Cat3Component,
    EditComponent,
    ProductsComponent,
    CategoryFilterPipe,
    ListerComponent,
    PriceorderPipe,
    AvailablestockPipe,
    CalcdiscontPipe,
    TopstarsPipe,
    LegoComponent,
    RandomPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
