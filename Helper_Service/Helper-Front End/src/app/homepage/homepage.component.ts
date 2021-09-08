import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/data/helper.service';
import { Helper } from 'src/model/helper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  useremail:any;
  helperRegisterForm=new FormGroup({
    'helperService':new FormControl(),
    'location':new FormControl(),
    'countrycode':new FormControl(),
    'contact':new FormControl(),
    'describe':new FormControl(),
    'aadhar':new FormControl(),
  });
  helper=new Helper();
    constructor(private hs:HelperService,private route: ActivatedRoute,private _router:Router) { }
   
    ngOnInit(): void {
      // this.route.queryParams.subscribe(params => {
      //   this.useremail= params['param'];
      // // const userEmailID=this.hs.email;
      // // console.log("User Email ID : "+this.hs);
      // })
      this.useremail=localStorage.getItem('email')
      
    }
  

  

  onSubmit(){
    this.helper.helperService=this.helperRegisterForm.value.helperService;
    this.helper.location=this.helperRegisterForm.value.location;
    this.helper.countryCode=this.helperRegisterForm.value.countrycode;
    this.helper.contact=this.helperRegisterForm.value.contact;
    this.helper.aadhar=this.helperRegisterForm.value.aadhar;
    this.helper.description=this.helperRegisterForm.value.describe;
    this.helper.userEmail=this.useremail;

    console.log(this.helperRegisterForm)
     // helper object is ready create a sservice pass the object 
        // to the service  - HelperService
    this.hs.createHelper(this.helper)
        .subscribe(
          response=>{console.log(response)},
          err=>{console.log(err)});
          this.helperRegisterForm.reset();
          alert("helper registered Successfully")
          this._router.navigate(['/homepage'])
          
  }

}
