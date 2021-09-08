import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from 'src/data/helper.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {
  useremail:any;
  constructor(private hs:HelperService,private _router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.hs.LoggedIn())
    return true;
  
      this._router.navigate(["login"])
      return false;
  }
  
}
