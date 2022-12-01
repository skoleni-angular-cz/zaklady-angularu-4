import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface ProductDto {
  id: number;
  name: string;
  price: number;
  discounted: boolean;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ApiProductsService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAllProducts(discounted?: boolean) {
    let url = 'http://localhost:3000/products';

    if (discounted === true || discounted === false) {
      url += `?discounted=${discounted}`
    }
    
    return this.httpClient.get<ProductDto[]>(url);
  }

  getProductById(productId: number) {
    return this.httpClient.get<ProductDto>(`http://localhost:3000/products/${productId}`);
  }

}