import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../../environments/environment';
import { ToolsService } from './tools.service';




@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor(private http: HttpClient, private toolsServ : ToolsService) { }
    getListe() {
    return this.http.get(`${url}/depot/depotAttente`);
  }
   getConfirmationDepot(input) {
     const options = this.toolsServ.formOption();
     const za = this.http.post(`${url}/depot/confirmation`, input, options);
     console.log(za);
     return za;
  }
}
