import { Component, OnInit } from '@angular/core';
import { productsList } from './products.mock';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // productsList = productsList; // Le cargamos los datos con un mock (solución temporal)
  productsList: IProduct[] = [];

  // Inyección de dependencias
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
      this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
        // console.log(data)
        this.productsList = data;
      })
  }
}
