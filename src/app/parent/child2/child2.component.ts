import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { throwIfEmpty } from 'rxjs/operators';
import { FormService } from 'src/app/service/form.service';
import { SujetService } from 'src/app/service/sujet.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public constructor(private myService: SujetService, private myServ: FormService) {

  }
  new = false;
  sujets;

  sujet = new FormGroup({
    title: new FormControl('',),
    description: new FormControl(''),
   // vote: new FormControl(''),
    userId: new FormControl(''),
     voteTrue: new FormControl(''),
     voteFalse: new FormControl(''),
  })

  ngOnInit(): void {

    this.sujets = this.myService.getAllSujets().subscribe((res) => {
      // console.log("Logged in!" + JSON.stringify(res));
      this.sujets = res
    // console.log("hello " + JSON.stringify(res));
    });
  }
  addSujet() {
    this.new = true
  }
  onSubmit() {
    console.log(this.sujet.value);
    this.myService.addSujet(this.sujet.value).subscribe((res) => {
      console.log("subject added!" + res);

    });
    this.sujet=  new FormGroup({
      title: new FormControl('',),
      description: new FormControl(''),
     // vote: new FormControl(''),
      userId: new FormControl(''),
       voteTrue: new FormControl(''),
       voteFalse: new FormControl(''),
    })
  }

  user = JSON.parse(localStorage.getItem('loggeduser'));


}