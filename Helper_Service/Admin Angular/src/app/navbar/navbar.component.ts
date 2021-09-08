import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=true;

  constructor(private loginservice:LoginserviceService) { 
   
  }

  ngOnInit(): void {
    this.loggedIn=this.loginservice.isLoggedIn()
  }

  logoutUser()
  {
    this.loginservice.logout();
    location.reload();
  }

}
