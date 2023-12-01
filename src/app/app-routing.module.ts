import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './component/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './component/seller-update-product/seller-update-product.component';
import { SearchComponent } from './component/search/search.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[authGuard]
  },
  {
    component:SellerAddProductComponent,
    path:'seller-add-product',
    canActivate:[authGuard]
  },
  {
    path:'seller-update-product/:id',
    component:SellerUpdateProductComponent,
    canActivate:[authGuard]
  },
  {  path:'search/:query',
  component:SearchComponent,
},
{
  path:'product-details/:productId',
  component:ProductDetailsComponent

},
{
  component:UserAuthComponent,
  path:'user-auth'
},
{
component:CartPageComponent,
path:'cart-page'
},
{
  component:CheckoutComponent,
  path:'checkout'
},
{
  component:MyOrdersComponent,
  path:'my-orders'
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
