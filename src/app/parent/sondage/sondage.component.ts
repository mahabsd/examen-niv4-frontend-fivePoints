import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SujetService } from 'src/app/service/sujet.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html'
})
export class SondageComponent implements OnInit {
  sujets;
  sujet;
  isDisabled = true;
  user;
  pourcentages
  usernum: any;
  pourcentagesOui: number;
  pourcentagesNon: number;

  constructor(private myService: SujetService, private userServices: FormService, private router: ActivatedRoute) {
    this.sujet = new FormGroup({
      title: new FormControl('',),
      description: new FormControl(''),
      vote: new FormControl(''),
      userId: new FormControl(''),
      // voteTrue: new FormControl(''),
      // voteFalse: new FormControl(''),
    })

  }
  id = this.router.snapshot.paramMap.get('index');

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggeduser'));
    this.myService.getSujet(this.id).subscribe(res => this.sujet = res)
    if (this.user.voteNumber = 0) {
      this.isDisabled = false
    }
pourcentage();
  }

  submit(i) {
    this.myService.updateSujet(i, this.sujet).subscribe((res) => {
      console.log('hi');
    });
    this.userServices.getUser(this.user._id).subscribe(res => res = this.user)
    this.user.voteNumber -= 1;
    this.userServices.updateUser(this.user._id, this.user).subscribe(res =>{})
  }
  toggle(event) {
    this.sujet.vote = event.target.id
    console.log(this.sujet.vote);
    if (this.sujet.vote == true) {
      this.sujet.voteTrue += 1
    } else {
      this.sujet.voteFalse += 1
    }
  }

  pourcentage() {
    this.userServices.getAllUsers().subscribe((res: any) =>{ this.usernum = res
    
    console.log(this.usernum.length);
      
    if (this.usernum != 0) {
      this.pourcentagesOui = (this.sujet.voteTrue * 100 ) / this.usernum.length
      this.pourcentagesNon = (this.sujet.voteFalse * 100 ) / this.usernum.length
    }
  }
    )
  }
}

