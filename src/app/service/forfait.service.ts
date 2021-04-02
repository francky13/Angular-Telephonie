import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  url = 'https://telephonie-services.herokuapp.com/';
  constructor(private http: HttpClient, private toolsServ: ToolsService) { }
  listeForfait(){
    return this.http.get(`${this.url}forfait/listeForfait`);
  }
   getInsertionForfait(Insertion) {
     const options = this.toolsServ.formOption();
     const za = this.http.post(`${this.url}forfait/addForfait`, Insertion, options);
     console.log(Insertion);
     return za;
  }
  statistic(){
    return this.http.get(`${this.url}forfait/getVenteForfait`);
  }

  insertConso(Insertion) {
    const options = this.toolsServ.formOption();
    const za = this.http.post(`${this.url}forfait/addConsommation`, Insertion, options);
    console.log(Insertion);
    return za;
 }

}
