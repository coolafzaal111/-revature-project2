import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  { path: '', 
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[LoginGuard]
     },

    { path:"home", 
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[AuthGuard] },

    { path: 'login', 
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[LoginGuard] },

    { path: 'dashboard', 
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
     },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
