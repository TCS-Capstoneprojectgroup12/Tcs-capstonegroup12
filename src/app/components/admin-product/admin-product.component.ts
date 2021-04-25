import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  @ViewChild('closeBtn', { static: false }) closeBtn: any;
  ProductList :any;
  constructor(public router: Router,private service: CommonService) { }
  isAdd = false;
  product_name: any; product_price: any; product_quantity: any; id: any;discount:any;

  getProduct() {
    this.service.getProduct().subscribe((result: any) => {
      if(result.status== 'success'){
      this.ProductList = result.data;
      }
    }, error => {

    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  edit(productdetails: any) {
    this.product_name = productdetails.product_name;
    this.product_price = productdetails.product_price;
    this.product_quantity = productdetails.product_quantity;
    this.id = productdetails._id;
    this.discount= productdetails.discount;
    this.isAdd = false;
    this.submitted = false;
    this.isProductExist=false;
  }


  delete(productdetails: any) {
   this.id= productdetails._id

  }
  deleteProduct(){
    this.closeBtn.nativeElement.click();
    this.service.deleteProduct({id:this.id}).subscribe((result: any) => {
      if(result.status== 'success'){ 
      this.getProduct();
    }
    alert(result.data);
    }, error => {

    });
  }
  add() {
    this.product_name = "";
    this.product_price = "";
    this.product_quantity = "";
    this.id = "";
    this.isAdd = true;
    this.submitted = false;
    this.isProductExist=false;
  }
  submitted = false;
  isProductExist=false;
  save() {
    this.submitted = true;
    let error=false;
    
    if((this.product_name=='' || this.product_name==undefined  || this.product_name==null) ||
    (this.product_price=='' || this.product_price==undefined  || this.product_price==null) ||
    (this.product_quantity=='' || this.product_quantity==undefined  || this.product_quantity==null)){
      error=true; 
    }else if(this.product_name!='' && this.product_name!=undefined  && this.product_name!=null) {
      let name=this.product_name;
      var r = this.ProductList.filter(function(item:any) {
        return item.product_name==name;
      });
      if (r.length > 0){
        error=true; 
        this.isProductExist=true;
      }
    }
    if(!error){
    let json = { product_name: this.product_name, product_price: this.product_price, 
      product_quantity: this.product_quantity, mode: 'Save',discount:this.discount };
 
    this.service.AddOrUpdateProduct(json).subscribe((result: any) => {
      if(result.status== 'success'){
      this.closeBtn.nativeElement.click();
      this.getProduct();
    }
    alert(result.data);
    }, error => {

    });
  }
  }
  update() {
    this.submitted = true;
    let error=false;
    
    if((this.product_name=='' || this.product_name==undefined  || this.product_name==null) ||
    (this.product_price=='' || this.product_price==undefined  || this.product_price==null) ||
    (this.product_quantity=='' || this.product_quantity==undefined  || this.product_quantity==null)){
      error=true; 
    }else if(this.product_name!='' && this.product_name!=undefined  && this.product_name!=null) {
      let name=this.product_name;
      var r = this.ProductList.filter(function(item:any) {
        return item.product_name==name;
      });
      if (r.length > 1){
        error=true; 
        this.isProductExist=true;
      }
    }
    if(!error){
    let json = { _id: this.id, product_name: this.product_name, 
      product_price: this.product_price, product_quantity: this.product_quantity, mode: 'Update',discount:this.discount };
  
    this.service.AddOrUpdateProduct(json).subscribe((result: any) => {
      if(result.status== 'success'){
      this.closeBtn.nativeElement.click();
      this.getProduct();
      }
      alert(result.data);
    }, error => {

    });
  }
  }

  logout(){
    this.router.navigate(['/main']);
  }

  employeeDetails() {
    this.router.navigate(['/employee']);
  }
  viewRequest(){

  }
}
