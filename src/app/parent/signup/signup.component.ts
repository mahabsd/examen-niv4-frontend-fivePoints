import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from '../child1/shared/password.validator';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'})
export class SignupComponent implements OnInit {

  registForm: FormGroup;
  submited: boolean = false;
  constructor(private AuthServices: FormService, private route:Router) { }

  ngOnInit(): void {
     this.registForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
     },
       { validators: passwordValidator }
    );
   
  }
  users;
  submitregister() {
    this.submited = true;
    if (this.registForm.invalid) {
      return;
    }
    this.AuthServices.addUser(this.registForm.value).subscribe((res)=>{
      console.log("signup!" + res);
    });    

    this.route.navigateByUrl("/child1");
   
  }
  
}
