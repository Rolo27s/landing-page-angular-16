import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  constructor (private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    setTimeout( () => {
      this._route.params.subscribe(params => {
        console.log(params['productId']); // productID defined into /app-routing.module.ts, line 11.
        this.producto = this.productList.find(producto => producto.id == params['productId']);
        this.color = this.producto?.price as number > 5 ? 'red' : ''; // Parametro de estilo de clase que aplicamos en el HTML
        this.loading = false;
      });
    }, 1500);

  }

}
