import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiProductsService, ProductDto } from '../api-products.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {

    product: ProductDto | undefined;
    subscription: Subscription | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private apiProductsService: ApiProductsService,
    ) {}

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            if (!isNaN(parseInt(params.productId, 10))) {
                this.apiProductsService.getProductById(
                    Number(params.productId)
                ).subscribe({
                    next: product => {
                        this.product = product;
                    },
                    error: err => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.status === 404) {
                                alert('Produkt nebyl nalezen');
                            }
                            else {
                                alert('Aplikace není dostupná');
                            }
                        }
                        else {
                            alert('Zkuste to prosím později');
                        }
                    },
                });
            }
            else {
                alert('productId is not a number');
            }
        });
    }

    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }

}