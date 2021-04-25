import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public router: Router,private formBuilder: FormBuilder,private service :CommonService) { }
  adminform = this.formBuilder.group({
    username: ['', [Validators.required]],    
    password: ['', [Validators.required]]    
  }); 
  ngOnInit(): void {
  }
  isLoginError=false;
  submitted = false;
  signin(){
    this.submitted = true;
    if(this.adminform.value.password!='' && this.adminform.value.username!=''){
   
    this.service.loginAdminUser(this.adminform.value).subscribe((result: any) => {  
console.log(result);
      if(result.status=="success"){
        this.router.navigate(['/adminproduct']);
        this.isLoginError=false;
      }else{
        this.isLoginError=true;
      }
       }, error => {
        this.isLoginError=true;
       });
          
    }
        
  }

}
