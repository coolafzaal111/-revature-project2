import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../adminservice/myservice.service';
import { Customer} from '../model/customer';
import { Helper } from '../model/helpers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  customer:Customer[]=[];
  helper:Helper[]=[];
  helper1:Helper=new Helper;

  ngOnInit(): void {
  }

  custUpdate={
    userName:'',
    state:'',
    mobile:'',
    email:'',
    userid:'',
    userPassword:'',
    countryCode:''
  }

  helpUpdate={
    helperId:0,
    helperService:'',
    location:'',
    description:'',
    aadhar:''
  }

  ////get all functions////

getAllCustomers(){
this.myservice.getCustomers().subscribe(
  (Response:any)=>{
    console.log(Response);
    this.customer=Response;
    
  },
  (error:any)=>{
     console.log(error);
     alert("error occured")
  }
);
}

getAllHelpers(){
  this.myservice.getHelpers().subscribe(
    (Response:any)=>{
      console.log(Response);
      this.helper=Response;
      
    },
    (error:any)=>{
       console.log(error);
       alert("error occured")
    }
  );
  }

  ////update functions

updateCust(){
  console.log(this.custUpdate)
  this.myservice.updateCustomer(this.custUpdate).subscribe(
    Response=>{
console.log("response")
alert("updated successfully");
window.location.reload();
    },
    error=>{
console.log("error occured")
    } 
  ) 
}

updateHelp(){
  console.log(this.helpUpdate)

  this.helper1.aadhar=this.helpUpdate.aadhar;
  this.helper1.helperId=this.helpUpdate.helperId;
  this.helper1.description=this.helpUpdate.description;
  this.helper1.helperService=this.helpUpdate.helperService;
  this.helper1.location=this.helpUpdate.location;

  this.myservice.updateHelper(this.helper1).subscribe(
    Response=>{
console.log("response")
alert("updated successfully");
window.location.reload();
    },
    error=>{
console.log("error occured")
    } 
  ) 
}
////delete functions////
deletecustCust(){
  console.log(this.custUpdate)
  this.myservice.deleteCustomer(this.custUpdate).subscribe(
    (Response:any)=>{
console.log("Deleted successfully")
console.log(Response)
alert(Response);
window.location.reload();
    },
    (error:any)=>{
console.log(error)
alert("Deleted successfully");
window.location.reload();
    } 
  )
}

deletecustHelp(){
  console.log(this.helpUpdate)
  this.myservice.deleteHelper(this.helpUpdate).subscribe(
    (Response:any)=>{
console.log("Deleted successfully")
console.log(Response)
alert(Response);
window.location.reload();
    },
    (error:any)=>{
console.log(error)
alert("Deleted successfully");
window.location.reload();
    } 
  )
}

////supportive functions////
getcustidfromedit(selectedId:any,selectedpass:any,selectedcode:any){
  this.custUpdate.userid=selectedId;
  this.custUpdate.userPassword=selectedpass;
  this.custUpdate.countryCode=selectedcode;
  console.log(this.custUpdate.userid)
  }

  getcustidfromhelp(selectedId:any,tempID:any){
    console.log(selectedId);
    console.log(tempID);
    this.helpUpdate.helperId=selectedId;
    this.helper1.customer.userid=tempID;
    
    }



}
