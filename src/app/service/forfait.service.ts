import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import {url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private http: HttpClient, private toolsServ: ToolsService) { }
  listeForfait(){
    return this.http.get(`${url}forfait/listeForfait`);
  }
   getInsertionForfait(Insetion) {
     const options = this.toolsServ.formOption();
     const za = this.http.post(`${url}forfait/addForfait`, Insetion, options);
     console.log(za);
     return za;
  }
}
