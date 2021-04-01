import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForfaitService } from 'src/app/service/forfait.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

 listeType = ['Appel', 'Sms', 'Internet', 'Full'];
 modeAppel = ['Ar', 'Min'];
 modeMega = ['Mo'];
 modeSms = ['SMS'];
 listeMode = [];


mandoForm = new FormGroup({
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    mode: new FormControl('', Validators.required),
    series: new FormControl('', Validators.required)
  });

  get name(): any {
    return this.mandoForm.get('name');
  }

  onFormSubmit(): void {
    this.name.disable();
    console.log('Name:' + this.mandoForm.get('name').value);
    console.log('Series:' + this.mandoForm.get('series').value);
  }
  constructor(private ForfaitServices: ForfaitService) { }

  ngOnInit(): void {
  }

  changeState(e) {
    if (e.target.value === 'Appel') {
      this.listeMode = this.modeAppel;
    }
    if (e.target.value === 'Sms') {
      this.listeMode = this.modeSms;
    }
    if (e.target.value === 'Internet') {
      this.listeMode = this.modeMega;
    }
    if (e.target.value === 'Full') {
      this.listeMode = this.modeAppel;
    }
    console.log(e.target.value);
  }

  }
