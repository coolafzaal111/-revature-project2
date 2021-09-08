import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../services/loginservice.service';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient,
    private loginserv:LoginserviceService) { }
   
    getCustomers(){
      return this.http.get(`http://localhost:8080/customers`);
    }
    getHelpers(){
      return this.http.get(`http://localhost:8080/helpers`);
    }

    updateCustomer(custUpdate:any){
      return this.http.put(`http://localhost:8080/customers`,custUpdate);
    }

    updateHelper(helper1:any){
      return this.http.put(`http://localhost:8080/helpers`,helper1);
    }

    deleteCustomer(custUpdate:any):Observable<string>{
      console.log("my id is"+custUpdate.userid);
      let id:number=custUpdate.userid;
      console.log("my converted id is"+id);
      return this.http.delete<string>(`http://localhost:8080/customers/`+id);
    }
  
    deleteHelper(helpUpdate:any){
      console.log("my id is"+helpUpdate.helperId);
      return this.http.delete<string>(`http://localhost:8080/helpers/`+helpUpdate.helperId);
    }
}
  
  

