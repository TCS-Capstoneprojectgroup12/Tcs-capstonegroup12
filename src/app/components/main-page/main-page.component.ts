import { Component, OnInit } from '@angular/core';
//import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $:any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { //config: NgbCarouselConfig

   // config.interval = 2000;
   // config.keyboard = true;
   // config.pauseOnHover = true;
  }
   logintype:any='Admin';
  employyloginpage(){
    this.logintype='Employee';
  }
  adminloginpage(){
    this.logintype='Admin';
  }
  userloginpage(){
    this.logintype='User';
  }
  ngOnInit(): void {
  }
  openModal(){
    $('#modalSignUpForm').modal('show');
    }
}
