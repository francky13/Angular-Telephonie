import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private http: HttpClient, private toolsServ: ToolsService) { }
  listeForfait(){
    return this.http.get(`${url}forfait/listeForfait`);
  }
   getInsertionForfait(Insertion) {
     const options = this.toolsServ.formOption();
     const za = this.http.post(`${url}forfait/addForfait`, Insertion, options);
     console.log(Insertion);
     return za;
  }
  statistic(){
    return this.http.get(`${url}forfait/getVenteForfait`);
  }

  insertConso(Insertion) {
    const options = this.toolsServ.formOption();
    const za = this.http.post(`${url}forfait/addConsommation`, Insertion, options);
    console.log(Insertion);
    return za;
 }

}
