import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  sujets:any=[];

  getSujets(){ return this.sujets;}

  sujetsUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  addSujet(data) {
    return this.http.post(this.sujetsUrl + "sujets/sujet/add/", data);
  }
  getSujet(id) {
    return this.http.get(this.sujetsUrl +"sujets/sujet/"+ id );
  }
  updateSujet(id, data) {
    return this.http.put(this.sujetsUrl +"sujets/sujet/update/"+ id , data);
  }
  getAllSujets() {
    return this.http.get(this.sujetsUrl +"sujets/getAllsujets" );
  }
  addUserId(idUser, idSujet){
    return this.http.get(this.sujetsUrl + "users/affectusersujet/"+idUser +"/"+ idSujet);
  }

}



