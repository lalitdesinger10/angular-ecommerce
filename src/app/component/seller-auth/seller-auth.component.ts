import { Component, OnInit } from '@angular/core';
 import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { signUp } from 'src/app/data.type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin= false
  authError:string = ''
  constructor(private seller:SellerService, private router:Router){}
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
    signUp(data:signUp):void{
      console.warn(data)
      // this.seller.userSignUp(data).subscribe((result)=>{
      //   // console.warn(result)
      //   if(result){
      //       this.router.navigate(['seller-home'])
      //   }
      // });'
      this.seller.userSignUp(data)
    } 
    userLogin(data:signUp):void{
      this.authError=""
      // console.warn(data);
      this.seller.userLogin(data)
      this.seller.isLoginError.subscribe((isError)=>{
        if(isError){
          this.authError="Email or password in not correct"
        }
      })
    }
    openLogin(){
      this.showLogin =true
    }
    openSignUp(){
      this.showLogin =false

    }
  }


