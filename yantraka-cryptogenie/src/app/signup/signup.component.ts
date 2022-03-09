
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm,  Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { response } from 'express';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignupService } from '../services/signup.service';

import { CustomValidators } from './custom-validator';

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public frmSignup: FormGroup;
  public displayMessage: string = '';
  constructor(private fb: FormBuilder, 
    private signupService: SignupService,
    private spinner: NgxSpinnerService,
    private auth: AuthService) {
    this.frmSignup = this.createSignupForm();
 }
 
  ngOnInit(): void {
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        firstname: [
          null,
          Validators.compose([Validators.required])
        ],
        lastname: [
          null,
          Validators.compose([Validators.required])
        ],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            Validators.minLength(6)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  loginWithRedirect(){
    this.auth.loginWithRedirect(
      {
        appState: { target: '/predictions' }
      }
    )
  }
  submit() {
    this.spinner.show()
    console.log(this.frmSignup.value);
    this.signupService.signUp(this.frmSignup.value).subscribe((response) => {
      console.log(response)
      if(response.status === 200){
        this.spinner.hide()
        this.frmSignup.reset()
        this.displayMessage= response.body;
        this.auth.loginWithRedirect({
          appState: {target : 'predictions'}
        })
      }else{
        this.displayMessage= 'Error Occured';
        this.spinner.hide()
      }
    })
  }
  
}




 