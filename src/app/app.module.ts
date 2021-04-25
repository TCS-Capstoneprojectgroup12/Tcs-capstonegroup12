import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
//import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminPageComponent,
    EmployeeLoginComponent,
    EmployeeListComponent,
    UserPageComponent,
    EmployeePageComponent,
    MainPageComponent,
    ProductComponent,
    AdminProductComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
