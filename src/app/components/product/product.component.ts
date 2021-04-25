import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductList=[{product_name:'Soap',product_price:10,product_quantity:5}]
  constructor() { }

  ngOnInit(): void {
  }

  edit(productdetails: any){

  }
  delete(productdetails: any){

  }

}
