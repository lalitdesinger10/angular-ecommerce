import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/data.type';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:String = 'default'
  sellerName :string ='';
  userName : string = '';
  searchResult: undefined | product[];
  cartItem=0;
 constructor(private route:Router, private product:ProductService){}

 ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      // console.warn(val.url)
      if(val.url){
        // console.warn(val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          // console.warn('in seller Area')
          this.menuType="seller"
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name
          }

        }else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName=userData.name
          this.menuType="user"
          this.product.getCartList(userData.id)
        } else{
          // console.warn('out side seller')
          this.menuType="default"

        }

      }
    })
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItem= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItem=items.length
    })
 }
 logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
 }
 userLogout(){
  localStorage.removeItem('user');
  this.route.navigate(['/auth-user']);
  this.product.cartData.emit([]);
 }

 searchProduct(query:KeyboardEvent){
  if(query){
    const element = query.target as HTMLInputElement;
    // console.warn(element.value);
    this.product.searchProduct(element.value).subscribe((result)=>{
      // console.warn(result);
      // length set kerne ke liye hai kitne show karane hai
      // if(result.length>5){
      //   result.length=5
      // }
      this.searchResult = result;
    })

    
  }
 }
 hideSearch(){
  this.searchResult=undefined
 }
 redirectToDetails(id:number){
  this.route.navigate(['/product-details/'+id])

 }
 searchSubmit(val:string){
// console.warn(val);
this.route.navigate([`search/${val}`])

 }
}
