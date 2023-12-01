import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { SellerAddProductComponent } from './component/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './component/seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './component/search/search.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { UserAuthComponent } from './component/user-auth/user-auth.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartPageComponent,
    CheckoutComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
