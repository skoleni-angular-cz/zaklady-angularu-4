import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import { ApiProductsService, ProductDto } from '../api-products.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit, OnDestroy {

    products$: Observable<ProductDto[]> = of([]);
    private subscription: Subscription | undefined;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiProductsService: ApiProductsService,
    ) {}

    ngOnInit(): void {
        this.subscription = this.activatedRoute.queryParams.subscribe(queryParams => {
            if (queryParams.discounted === 'true') {
                this.loadAllProducts(true);
            }
            else if (queryParams.discounted === 'false') {
                this.loadAllProducts(false);
            }
            else {
                this.loadAllProducts();
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    loadAllProducts(discounted?: boolean) {
        this.products$ = this.apiProductsService.getAllProducts(discounted);
    }

    openProduct(product: ProductDto) {
        this.router.navigateByUrl(`/products/${product.id}`);
    }

}