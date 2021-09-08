import { Injectable } from '@angular/core';
import { HttpClient, HttpContextToken } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/model/customer';
import { Helper } from 'src/model/helper';
import { Queryfeed } from 'src/model/query';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  

  constructor(private http:HttpClient) { }
    private userEmail:String='';
    // public set email(v : string) {
    //   this.userEmail = v;
    // }
    location:any=localStorage.getItem('local');
    LoggedIn(){
      let email = localStorage.getItem("email");
   
      if(email==undefined || email === '' || email==null)
      return false;
      else
      return true;
   
     }
     logout(){
      localStorage.removeItem('email')
      localStorage.removeItem('local')

      return true;
    }
    getEmail(email:string){
      localStorage.setItem("email",email)
    }
    createQuery(c:Queryfeed):Observable<Customer>{
       
      
      return this.http.post<Customer>("http://localhost:9000/feed/add ",c);
    }
    createCustomer(c:Customer):Observable<Customer>{
      console.log("welcome"+c.userName+" "+c.email+c.countryCode+c.mobile+c.jobType+c.userPassword);  
      this.userEmail=c.email;
      return this.http.post<Customer>("http://localhost:9000/customer/add ",c);
    }
    createHelper(h:Helper):Observable<Helper>{
  
      console.log("welcome"+h.helperService+" "+h.aadhar+h.countryCode+h.contact+h.location+h.userEmail);

      return this.http.post<Helper>("http://localhost:9000/helpers",h);
    }

    loginCustomer(c:Customer):Observable<Customer>{
      console.log("welcome"+c.userName+" "+c.email+c.countryCode+c.mobile+c.jobType+c.userPassword);
      return this.http.post<Customer>("http://localhost:9000/login",c);
    }

    getMechnical():Observable<Helper[]>{
      return this.http.get<Helper[]>("http://localhost:9000/mechnical");
   }
   getPlumber():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/plumber");
   }
   getElectrician():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/electrician");
   }
   getCarpenter():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/carpenter");
   }
   getOther():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/other");
   }
   getTutor():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/tutor");
   }
   getUserData(email:any):Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9000/user/"+email);
  }
  getMechanicByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/mechanicl/"+location);
   }
   getPlumberByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/plumberl/"+location);
   }
   getCarpentarByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/carpenterl/"+location);
   }
   getTutorByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/tutorl/"+location);
   }
   getELectricianByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/electricianl/"+location);
   }
   getOtherByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/otherl/"+location);
   }
   getHelperData(email:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/helperid/"+email);
  }

   
  
}
