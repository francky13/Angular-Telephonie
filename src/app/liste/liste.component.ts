import { Component, OnInit } from '@angular/core';
import { ListeService } from '../service/liste.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  result: any = '' ;
  constructor(
    private listeService: ListeService
    ) { }

  ngOnInit(): void {
    this.initProjets();

  }
initProjets(){
    this.listeService.getListe().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps['data'];
         console.log(this.result);
      }
    );
  }

}
