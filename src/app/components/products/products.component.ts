import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/assets/constants/text.interfaces';
import { productText } from 'src/assets/constants/text';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productText: ProductType;
  products: Product[] = [];

  // importando y usando el servicio creado, con una variable privada
  constructor(
    private ProductsServices: ProductsService
  ){
    this.productText = productText
  }

  // El subscribe me suscribe a eventos que puedan estar pasando en un observable, en este caso para modelos asíncronos
  ngOnInit(): void {
    this.ProductsServices.getAllProducts()
      .subscribe(data => { 
        this.products = data;
      })
  }
  
}
