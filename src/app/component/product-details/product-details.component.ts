import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from 'src/app/data.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData : undefined | product
  productQuantity:number=1
  removeCart= false
  cartData : product | undefined
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){}

ngOnInit(): void {
  let productId = this.activeRoute.snapshot.paramMap.get('productId')
  console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.warn(result);
        this.productData=result
    })
    let cardData = localStorage.getItem('localCart');
    if(productId && cardData){
      let items = JSON.parse(cardData);
      items = items.filter((item:product)=>productId== item.id.toString());
      if(items.length){
        this.removeCart = true
      }else{
        this.removeCart= false
      }
    }
    let user = localStorage.getItem('user');
    if(user){
      let userId = user && JSON.parse(user).id;
      this.product.getCartList(userId);
      
      this.product.cartData.subscribe((result)=>{
        let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
        if(item.length){
          this.cartData=item[0];
          this.removeCart=true
        }
      })
    }
}
handleQuantity(val:string){
  if(this.productQuantity<20 && val === 'plus'){
    this.productQuantity+=1
  } else if (this.productQuantity>1 && val === 'min'){
    this.productQuantity-=1
  }
}
AddtoCard(){
  if(this.productData){
    this.productData.quantity = this.productQuantity;
    if(!localStorage.getItem('user')){
      // console.warn(this.productData);
      this.product.localAddToCard(this.productData)
      this.removeCart=true
    }else{
      // console.warn('user login');      
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id
      // console.warn(userId);      
      let cartData:cart={
        ...this.productData,
        userId,
        productId:this.productData.id,
      }
      console.warn(cartData);
      delete cartData.id;
      this.product.addToCart(cartData).subscribe((result)=>{
        if(result){
          // alert('Product is added in cart')
          this.product.getCartList(userId);
          this.removeCart=true
        }
      })
    }
  }
}
removeToCart(productId:number){
  if(!localStorage.getItem('user')){
    this.product.localRemoveFromCart(productId)
  } else {
    // console.warn(this.cartData);
    let user = localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
    this.cartData && this.product.removeToCart(this.cartData.id)
    .subscribe((result)=>{
      if(result){
        this.product.getCartList(userId)
      }
    })
    this.removeCart=false

  }
  

}
}
