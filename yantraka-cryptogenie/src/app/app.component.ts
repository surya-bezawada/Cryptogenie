import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  goto(id:any){
    
  }
  constructor(public auth: AuthService){

  }

  loginWithRedirect(){

    
     this.auth.loginWithRedirect(
      {
        appState: { target: '/predictions' }
      }
    ) 
  }

  logout(): void {
    console.log("hi hellooo", this.auth.isAuthenticated$)
    this.auth.logout({ returnTo: window.location.origin });

  }
  // isAuthenticated: boolean = false;
  // constructor(public oktaAuth: OktaAuthService){
  //   this.oktaAuth.$authenticationState.subscribe(
  //     (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
  //   )
  // }
  ngOnInit() {
    // this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
    console.log()
  }

  // login() {
  //   this.oktaAuth.loginRedirect();
  // }

  // logout() {
  //   this.oktaAuth.logout('/');
  // }
}
