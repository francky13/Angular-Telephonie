import { Component, OnInit } from '@angular/core';
import { ListeService } from '../../service/liste.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  result: any = '' ;
  response: any = '';

  error_message = '';
  message = '';
  constructor(
    private listeService: ListeService
    ) { }
    ngOnInit(): void {
    this.Liste();
  }


    Liste() {
    this.listeService.getListe().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps.data;
         console.log(this.result);
      }
    );
  }
    Confirm(idDepot) {
     const onSuccess = response => {
       if (response.status === 200) {
        this.message = 'Succes Confirmation';
      } else {
        this.error_message = 'Erreur Confirmation';
      }
    };

     const onError = response => {
     this.message = 'Erreur interne';
    };
     const input = {
      idDepot
    };
     this.listeService.getConfirmationDepot(input).subscribe(onSuccess, onError);
     alert('Succes Confirmation');
  }

}
