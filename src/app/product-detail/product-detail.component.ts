import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        // console.log(params['productId']); // productID defined into /app-routing.module.ts, line 11.
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = (this.product?.price as number) > 200 ? 'red' : ''; // Parámetro de estilo de clase que aplicamos en el HTML
            this.loading = false;
            error: (error: any) => {
              console.log(error);
              this.loading = false;
            };
          },
        });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
