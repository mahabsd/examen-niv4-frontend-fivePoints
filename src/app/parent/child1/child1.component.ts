import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor(private formService: FormService, private AuthServices: FormService, private route: Router) { 
  
  }
  public form = [];
  users;
  submited: boolean = false;

  ngOnInit(): void {
  }
 
  registrationForm = new FormGroup({
    userName: new FormControl('', ),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',  [Validators.required]),
    confirmPassword: new FormControl('',),

  })


  response;
    onSubmit(){
      console.log(this.registrationForm.value);
      this.formService.loginUser(this.registrationForm.value).subscribe((res)=>{
        // console.log("Logged in!" + JSON.stringify(res));
       this.response = res    
        localStorage.setItem('loggeduser', JSON.stringify(this.response.user ));
        localStorage.setItem('token', this.response.token );

         this.route.navigateByUrl('/child2');
      })    
    }
  }
 
