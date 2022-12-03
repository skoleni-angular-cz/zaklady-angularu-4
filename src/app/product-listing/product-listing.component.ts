import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { ApiProductsService, ProductDto } from '../api-products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit, OnDestroy {

  products$: Observable<ProductDto[]> = of([]);

  private paramsSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService,
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams.discounted === 'true') {
        this.loadDiscountedProducts();
      }
      else {
        this.loadAllProducts();
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  loadAllProducts() {
    this.products$ = this.apiProductsService.getAllProducts();
  }

  loadDiscountedProducts() {
    this.products$ = this.apiProductsService.getAllProducts(true);
  }

  openProduct(product: ProductDto) {
    this.router.navigate(['products', product.id]);
  }

}
