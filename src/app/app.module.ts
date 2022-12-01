import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductPageComponent,
    NotFoundPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
