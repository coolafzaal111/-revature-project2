import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginservice.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginservice:LoginserviceService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //    let newReq=req;
       let token=this.loginservice.getToken();

       console.log("INTERCEPTOR",token);

       if(token!=null){
          req= req.clone({setHeaders:{"Authorization":`Bearer ${token}`}});
       }

    //    console.log("new request",newReq);
       return next.handle(req);

    }
    
}