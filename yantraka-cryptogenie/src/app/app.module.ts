
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error/error.component';
import { AuthModule } from '@auth0/auth0-angular';

import { environment }  from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    
    SignupComponent,
    
   
  
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
   
    NgbModule,
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    RouterModule.forRoot([
      {
        path: 'signup',
        component: SignupComponent
      }
    ]),
    AuthModule.forRoot({
      ...environment.auth
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
