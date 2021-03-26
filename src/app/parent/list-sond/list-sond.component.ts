import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/service/form.service';
import { Router } from '@angular/router';
import { SujetService } from 'src/app/service/sujet.service';

@Component({
  selector: 'app-list-sond',
  templateUrl: './list-sond.component.html',
  styleUrls: ['./list-sond.component.css']
})
export class ListSondComponent implements OnInit {
  sujets
  constructor(private myService: SujetService, private AuthServices: FormService, private route: Router) { 
  
  }

  ngOnInit(): void {
     this.myService.getAllSujets().subscribe((res) => {
      // console.log("Logged in!" + JSON.stringify(res));
      this.sujets = res      
    });
  }


}
