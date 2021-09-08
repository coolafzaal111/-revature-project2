import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(`http://localhost:8080/token`,credentials)
  }

  loginUser(token: string)
  {
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
   let token = localStorage.getItem("token");

   if(token==undefined || token === '' || token==null)
   return false;
   else
   return true;

  }

  logout(){
    localStorage.removeItem('token')
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
