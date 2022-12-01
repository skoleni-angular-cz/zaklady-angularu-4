import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiProductsService, ProductDto } from '../api-products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {

  product: ProductDto | undefined;

  constructor(
    private apiProductsService: ApiProductsService,
  ) {}

  ngOnInit() {
    this.apiProductsService.getProductById(1).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    
  }
  
}
