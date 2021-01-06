import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { valueOf } from 'events';
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
    vote: new FormControl(''),
    userId: new FormControl(''),
  })

  ngOnInit(): void {

    this.sujets = this.myService.getAllSujets().subscribe((res) => {
      // console.log("Logged in!" + JSON.stringify(res));
      this.sujets = res
      console.log("hello " + JSON.stringify(res));
    });
    this.disableSondage()
  }
  addSujet() {
    this.new = true
  }
  onSubmit() {
    console.log(this.sujet.value);
    this.myService.addSujet(this.sujet.value).subscribe((res) => {
      console.log("subject added!" + res);

    });

    window.location.reload();
  }

  user = JSON.parse(localStorage.getItem('loggeduser'));

  toggle(event, i) {
    console.log(event.target.checked, i);
    this.sujet.patchValue({
      vote: event.target.checked,
      userId: this.user._id
    })
    this.myService.updateSujet(i, JSON.stringify(this.sujet)).subscribe((res) => {
      console.log("subject added!");
    });
  }
  nbVote = 0;
  pour
  pourcentage() {
    if (this.sujets.length == 0) {
      return 0
    } else {
      this.sujets.map(sujet => {
        if (sujet.userId == this.user._id) {
          if (sujet.vote == true) {
            this.nbVote += 1
          }
        }
      })
      console.log(this.nbVote + 'length' + this.sujets.length);
      this.pour = (this.nbVote * 100) / this.sujets.length
      if (this.pour > this.sujets.length) {
        this.pour = 100
      }
    }


    // this.sujets.length
  }
  isDisabled = false;
  disableSondage() {
    var time = new Date();
    var hours = time.getHours();
    if (this.nbVote > 4) {
      this.isDisabled = true;
    }
    if (hours > 23) {
      //your button disabling logic will come here
      this.isDisabled = false;

    }
  }
  // updateSujet(i, data){
  //   this.myService.updateSujet(i, data) 
  // }
  // delete(i){
  //   this.myService.deleteSujet(i) 
  //   }
}