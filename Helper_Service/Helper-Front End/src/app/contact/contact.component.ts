import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/data/helper.service';
import { Queryfeed } from 'src/model/query';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  feedback=new FormGroup({
    'firstname':new FormControl(),
    'lastname':new FormControl(),
   'countrycode':new FormControl(),
    'contact':new FormControl(),
    'Email':new FormControl(),
    'contactyou':new FormControl(),
    'feedback':new FormControl(),
  })
  query=new Queryfeed();

  constructor(private hs:HelperService,private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.query.firstname=this.feedback.value.firstname;
    this.query.lastname=this.feedback.value.lastname;
    this.query.countrycode=this.feedback.value.countrycode;
    this.query.contact=this.feedback.value.contact;
    this.query.Email=this.feedback.value.email;
    this.query.contactyou=this.feedback.value.contactyou;
    this.query.feedback=this.feedback.value.feedback;
    console.log(this.feedback)
     // query object is ready create a sservice pass the object 
        // to the service  - HelperService
    this.hs.createQuery(this.query)
        .subscribe(
          (response:any)=>{console.log(response)
            alert("Feedback registered Successfully")
            
          },
          err=>{console.log(err);
          alert(err)});
          this.feedback.reset();
          
          this._router.navigate(['/contact'])
  }

}
