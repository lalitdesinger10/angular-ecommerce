import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../data.type';
import { BehaviorSubject } from 'rxjs';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggediIn= new  BehaviorSubject<boolean>(false);
isLoginError = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
 userSignUp(data:signUp){
  let result = this.http.post('http://localhost:3000/seller', data,{observe:'response'}
  ).subscribe((result)=>{
    this.isSellerLoggediIn.next(true);
  localStorage.setItem('seller', JSON.stringify(result.body))
    this.router.navigate(['seller-home'])

    console.warn('result',result);

  })
  // return false
 }
 reloadSeller(){
  if(localStorage.getItem('seller')){
    this.isSellerLoggediIn.next(true)
    this.router.navigate(['seller-home'])

  }
 }
 userLogin(data:login){
  console.warn(data)
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  {observe:'response'}
  ).subscribe((result:any)=>{
    // console.warn(result)
    if(result && result.body && result.body.length){
      // console.warn('User Logged In')
      localStorage.setItem('seller', JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
    }else{
      // console.warn('Login Failed')
      this.isLoginError.emit(true)
    }
  })
 }
}
