import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from 'src/data/helper.service';
import { HelperRegistrationComponent } from './helper-registration/helper-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardUserGuard } from './guard-user.guard';
import { LoginguardGuard } from './loginguard.guard';
import { NgValidatorsModule } from '@ng-validators/ng-validators';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    FooterComponent,
    ServiceComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HelperRegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgValidatorsModule,
  ],
  providers: [HelperService,GuardUserGuard,LoginguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
