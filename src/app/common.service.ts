import { Injectable } from '@angular/core';   
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
   
@Injectable({
    providedIn: 'root'
  })  
export class CommonService {  

    constructor(private http: HttpClient) { }  

    loginAdminUser(user:any){      
        return this.http.post('http://localhost:9090/api/admin/login', user);            
      }  
      AddOrUpdateProduct(product:any){      
        return this.http.post('http://localhost:9090/api/saveProduct', product);            
      }  

      getProduct(){
        return this.http.get('http://localhost:9090/api/getProduct');     
      }
      deleteProduct(product:any){      
        return this.http.post('http://localhost:9090/api/deleteProduct', product);            
      }  

      
    
}