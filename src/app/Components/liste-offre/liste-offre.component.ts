import { Component, OnInit } from '@angular/core';
import { ForfaitService } from 'src/app/service/forfait.service';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.scss']
})
export class ListeOffreComponent implements OnInit {

 result: any = '' ;
  response: any = '';

  error_message = '';
  message = '';
  constructor( private ForfaitService: ForfaitService) { }
    ngOnInit(): void {
    this.Liste();
  }


    Liste() {
    this.ForfaitService.listeForfait().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps.data;
         console.log(this.result);
      }
    );
  }
  }


