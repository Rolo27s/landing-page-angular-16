import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Si el path esta vacio, va a ser home
  { path: 'products', component: ProductsComponent },
  { path: 'products/:category/:productId', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' } // Si el path es cualquier cosa, redireccionamos a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
