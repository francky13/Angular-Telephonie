import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  url = 'https://telephonie-services.herokuapp.com/';
  constructor(private http: HttpClient, private toolsServ : ToolsService) { }
    getListe() {
    return this.http.get(`${this.url}/depot/depotAttente`);
  }
   getConfirmationDepot(input) {
     const options = this.toolsServ.formOption();
     const za = this.http.post(`${this.url}/depot/confirmation`, input, options);
     console.log(za);
     return za;
  }
}
