import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardUserGuard } from './guard-user.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LoginguardGuard } from './loginguard.guard';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: '',   component: LoginComponent, pathMatch: 'full',canActivate:[LoginguardGuard] }, // redirect to `first-component`
  { path: 'contact', component: ContactComponent,canActivate:[GuardUserGuard]},
  { path: 'homepage', component: HomepageComponent,canActivate:[GuardUserGuard]},
  { path: 'about', component: AboutComponent,canActivate:[GuardUserGuard]},
  {path: 'login',component: LoginComponent,canActivate:[LoginguardGuard]},
  {path: 'register',component:RegisterComponent,canActivate:[LoginguardGuard]},
  { path: 'service', component: ServiceComponent,canActivate:[GuardUserGuard]},
  {path: 'dashboard',component:DashboardComponent,canActivate:[GuardUserGuard]}

//   { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
//   {path: 'login',component: LoginComponent,canActivate:[GuardUserGuard]},
//   {path: 'register',component:RegisterComponent},
//   { path: 'homepage',
//   children:[
//   { path: 'contact', component: ContactComponent},
//   { path: 'about', component: AboutComponent},
//   { path: 'service', component: ServiceComponent},
//   {path: 'dashboard',component:DashboardComponent}
//   ]
// },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
