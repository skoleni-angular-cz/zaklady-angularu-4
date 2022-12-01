import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiProductsService, ProductDto } from '../api-products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit, OnDestroy {

  products$: Observable<ProductDto[]> = of([]);

  constructor(
    private apiProductsService: ApiProductsService,
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  ngOnDestroy(): void {
    
  }

  loadAllProducts() {
    this.products$ = this.apiProductsService.getAllProducts();
  }

  loadDiscountedProducts() {
    this.products$ = this.apiProductsService.getAllProducts(true);
  }

  openProduct(product: ProductDto) {
    // todo implement
  }

}
