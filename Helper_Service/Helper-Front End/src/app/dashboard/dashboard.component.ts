import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/data/helper.service';
import { Customer } from 'src/model/customer';
import { Helper } from 'src/model/helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 useremail:any;
 userId:any;
 checkService=false;
  // customer: Customer = new Customer;
 customers:Customer[]=[];
 Helpers:Helper[]=[];
  // myRegisterForm: FormGroup ;
 myUser=new FormGroup({
  'userName':new FormControl(),
  'email':new FormControl(),
  'countrycode':new FormControl(),
  'mobile':new FormControl(),
  'jobType':new FormControl(),
  'password':new FormControl(),
});
  constructor(private hs:HelperService,private _router:Router) { }
  ngOnInit(): void {
    this.useremail=localStorage.getItem('email')
    // this.hs.getUserData(this.useremail).subscribe((response:any)=>{this.customers=response;console.log(this.customers,response,this.customers[0].email)},
    // err=>{console.log(err)})
  }
  
  getUserData(){
    console.log("Email Id : "+this.useremail)
    this.hs.getUserData(this.useremail).subscribe((response:any)=>{this.customers=response;console.log(this.customers,response)},
      err=>{console.log(err)})
  }
  getHelperData(){
    console.log("Email Id : ")
    this.hs.getHelperData(this.useremail).subscribe((response:any)=>{this.Helpers=response;console.log(this.Helpers[0].helperService,response),this.checkService=true},
      err=>{console.log(err)})
  }

}
