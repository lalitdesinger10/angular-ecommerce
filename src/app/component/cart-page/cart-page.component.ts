import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from 'src/app/data.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cartData:cart[] | undefined;
priceSummary: priceSummary ={
  price:0,
  discount:0,
  tax:0,
  delivery:0,
  total:0,
}
  constructor(private  product:ProductService, private route:Router){}
ngOnInit():void{
this.priceLoadData()
}
removeToCart(cartId:number | undefined){
cartId && this.cartData && this.product.removeToCart(cartId).subscribe((result)=>{
  this.priceLoadData();

})

}
checkout(){
  this.route.navigate(['/checkout']);
}
priceLoadData(){
  
  this.product.currentCart().subscribe((result)=>{
    // console.warn('cart page', result);
    this.cartData=result;
    let price=0;
    result.forEach((item)=>{
      if(item.quantity){
        price=price + +item.price* +item.quantity

      }
    })
    // console.warn(price);
    this.priceSummary.price =price;
    this.priceSummary.discount = price/5;
    this.priceSummary.tax= price/10;
    this.priceSummary.delivery=100;
    this.priceSummary.total=price+(price/5)+100-(price/10);
    if(!this.cartData.length){
      this.route.navigate(['/'])
    }
  // console.warn(this.priceSummary);
  
    
  })

}

}
