import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginserviceService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  hide = true;


  onSubmit(){
    
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
    console.log("form submited")
    //token genetration
    this.loginService.generateToken(this.credentials).subscribe(
      (response:any)=>{
        console.log(response);
        this.loginService.loginUser(response.token);
        // this._router.navigate(['/homepage'])}
        
        alert("Login Successful.")
        // this.router.navigate(['home']);
        window.location.href="/home"
      },
      error=>{
        alert("Invalid Credentials")
      }
    )
    
    }
    else{
    alert("fields should not be empty")
    }
  }
}

