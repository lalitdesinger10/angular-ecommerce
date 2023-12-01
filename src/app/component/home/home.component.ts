import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/data.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  popularProducts:undefined | product[];
  trendyProducts:undefined | product[];
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
constructor(private product:ProductService){}

ngOnInit(): void {
  this.product.popularProducts().subscribe((data)=>{
    console.warn(data); 
    this.popularProducts=data; 
  });
  this.product.trendyProduct().subscribe((data)=>{
    this.trendyProducts =data
  })
}

}
