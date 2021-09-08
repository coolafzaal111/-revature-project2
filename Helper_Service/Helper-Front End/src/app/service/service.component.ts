import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { HelperService } from 'src/data/helper.service';
import { Helper } from 'src/model/helper';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  helpers:Helper[]=[];
  local:any;
  message: string='';
  msg6:boolean=true;
  msg1:boolean=true;
  msg2:boolean=true;
  msg3:boolean=true;
  msg4:boolean=true;
  msg5:boolean=true;

  helperServiceGet=new FormGroup({
    'helperService':new FormControl(),
    'location':new FormControl(),
    'countrycode':new FormControl(),
    'contact':new FormControl(),
    'describe':new FormControl(),
    'aadhar':new FormControl(),
  });
  helperServiceLocation=new FormGroup({
    
    'location':new FormControl(),
  
  });
 

  constructor(private hs:HelperService,private router:Router) { }
  ngOnInit(): void {
  }
  onsub(){
    localStorage.setItem("local",this.state);
   
  }
  
 state:any;
  getMechanicl(){
    this.hs.getMechnical().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getPlumber(){
    this.hs.getPlumber().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getElectrician(){
    this.hs.getElectrician().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getCarpenter(){
    this.hs.getCarpenter().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getTutor(){
    this.hs.getTutor().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getOther(){
    this.hs.getOther().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getMechanicByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getMechanicByLocation(localStorage.getItem('local')).subscribe(response=>{ if(response==null){
      alert("Sorry,We don't serve in your area yet....Please Select another State ")
      this.msg1=false;
      this.message="Sorry,We don't serve in your area yet.... ";
      // window.location.href="/service"
      // this.router.navigate(["service"])
    
    }
    else {this.helpers=response;this.msg1=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getPlumberByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getPlumberByLocation(localStorage.getItem('local')).subscribe(response=>{ if(response==null){
      alert("Sorry,We don't serve in your area yet....Please Select another State ")
      this.msg2=false;
      this.message="Sorry,We don't serve in your area yet.... ";
      // this.msg="Sorry,We don't serve in your area yet.... ";
      // window.location.href="/service"
      // this.router.navigate(["service"])
    
    }
    else {this.helpers=response;this.msg2=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getCarpentarByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getMechanicByLocation(localStorage.getItem('local')).subscribe(response=>{ if(response==null){
      alert("Sorry,We don't serve in your area yet....Please Select another State ")
      this.msg3=false;
      this.message="Sorry,We don't serve in your area yet.... ";
      // this.msg="Sorry,We don't serve in your area yet.... ";
      // window.location.href="/service"
      // this.router.navigate(["#"])
    
    }
    else {this.helpers=response;this.msg3=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getTutorByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs. getTutorByLocation(localStorage.getItem('local')).subscribe(response=>{ if(response==null){
      alert("Sorry,We don't serve in your area yet....Please Select another State ")
      this.msg4=false;
      this.message="Sorry,We don't serve in your area yet.... ";
      // this.msg="Sorry,We don't serve in your area yet.... ";
      // window.location.href="/service"
      // this.router.navigate(["service"])
    
    }
    else {this.helpers=response;this.msg4=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getElectricianByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getELectricianByLocation(localStorage.getItem('local')).subscribe(response=>{ if(response==null){
      alert("Sorry,We don't serve in your area yet....Please Select another State ")
      this.msg5=false;
      this.message="Sorry,We don't serve in your area yet.... ";
      // this.msg="Sorry,We don't serve in your area yet.... ";
   // window.location.href="/service"
  //  this.router.navigate(["service"])
    
    }
    else {this.helpers=response;this.msg5=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getOtherByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getOtherByLocation(localStorage.getItem('local')).subscribe(response=>{
      if(response==null){
        alert("Sorry,We don't serve in your area yet.... ")
        this.message="Sorry,We don't serve in your area yet.... ";
        // this.msg="Sorry,We don't serve in your area yet.... ";
        this.msg6=false;
        // window.location.href="/service"
      // this.router.navigate(["service"])
      }
      else {this.helpers=response;this.msg6=true}},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  
 
}
