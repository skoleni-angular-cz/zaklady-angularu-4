import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductListingComponent,
  },
  {
    path: 'products/:id',
    component: ProductPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
})
export class AppRoutingModule {}
