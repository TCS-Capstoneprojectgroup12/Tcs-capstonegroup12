import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  {path: 'main', component:MainPageComponent},
  {path: 'adminproduct', component:AdminProductComponent},
  {path: 'employee', component:EmployeePageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
