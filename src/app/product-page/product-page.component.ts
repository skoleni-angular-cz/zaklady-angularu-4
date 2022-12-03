import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiProductsService, ProductDto } from '../api-products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {

  product: ProductDto | undefined;
  productNotFound = false;

  private paramsSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.product = undefined;
        
        this.apiProductsService.getProductById(Number(params.id)).subscribe({
          next: product => {
            this.product = product;
            this.productNotFound = false;
          },
          error: e => {
            if (e instanceof HttpErrorResponse && e.status === 404) {
              this.productNotFound = true;
            }
          },
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
  
}
