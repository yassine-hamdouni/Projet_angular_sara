import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  color: String = "red"; 
  prixmax!: number 
  listProduct : any[] = [
    {id:1,title:'Iphone15', price:1000,quantity:10, nbrLike:12, img:"../../assets/img/iphone-15-128go-rose.jpg"},
    {id:1,title:'Iphone15pro', price:1200,quantity:10, nbrLike:12, img:"../../assets/img/iphone-15-128go-rose.jpg"},
    {id:1,title:'Iphone15promax', price:1400,quantity:10, nbrLike:12, img:"../../assets/img/iphone-15-128go-rose.jpg"},
  ]
  
  incrementLikes(product: any) {
    product.nbrLike++;
  }
  Buy(product:any){
    product.quantity--;
  }

}
