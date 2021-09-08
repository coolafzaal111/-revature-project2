import { Component, OnInit, Output,EventEmitter, Query, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/data/helper.service';
import { Customer } from 'src/model/customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output()  useremail:EventEmitter<string>=new EventEmitter();
  // @Input() userEmail:String;
  customer=new Customer();
  msg='';
  constructor(private lg:HelperService,private _router:Router) { }

    loginForm = new FormGroup({
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
    });
  ngOnInit(): void {
  }
  onSubmit(){
    this.customer.email=this.loginForm.value.email;
    this.customer.userPassword=this.loginForm.value.password;
    console.log(this.loginForm)
    
     // customer object is ready create a sservice pass the object 
        // to the service  - HelperService
    this.lg.loginCustomer(this.customer)
        .subscribe( 
          (response:any)=>{console.log(response)
            this.lg.getEmail(response.email)
            alert("login Successfully")

            // this.useremail.emit(this.loginForm.value.email);
            // this.lg.email=this.loginForm.value.email;
            // this._router.navigate(['/homepage'])
          window.location.href="/homepage"},

          err=>{console.log(err)
            this.msg="Invalid Details"
            alert("invalid details")});
           
          this.loginForm.reset();
          
  }


}
