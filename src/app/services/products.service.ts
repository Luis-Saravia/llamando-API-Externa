import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

}
