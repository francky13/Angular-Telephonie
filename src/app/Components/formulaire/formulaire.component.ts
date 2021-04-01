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
 listeMode = this.modeAppel;


forfaitForm = new FormGroup({
    typeForfait: new FormControl('', Validators.required),
    nomForfait: new FormControl('', Validators.required),
    prixForfait: new FormControl('', Validators.required),
    dureeForfait: new FormControl('', Validators.required),
    valeurAppel: new FormControl('', Validators.required),
    modeAppel: new FormControl('', Validators.required),
    volumeMega: new FormControl('', Validators.required),
    nbSms: new FormControl('', Validators.required)
  });

  get appel(): any {
    return this.forfaitForm.get('valeurAppel');
  }
  get mega(): any {
    return this.forfaitForm.get('volumeMega');
  }
  get sms(): any {
    return this.forfaitForm.get('nbSms');
  }

  get mode(): any {
    return this.forfaitForm.get('modeAppel');
  }

  typeAppel() : void {
    this.appel.enable();
    this.mode.enable();
    this.mega.disable();
    this.sms.disable();
  }

  typeMega() : void {
    this.mega.enable();
    this.appel.disable();
    this.sms.disable();
    this.mode.disable();
  }

  typeSms() : void {
    this.mega.value = 0;
    this.appel.value = 0;
    this.sms.enable();
    this.mega.disable();
    this.appel.disable();
    this.mode.disable();
  }

  typeFull(): void{
    this.sms.enable();
    this.mega.enable();
    this.appel.enable();
    this.mode.enable();
  }

  onFormSubmit(): void {
    // this.nom.disable();
    console.log('FORFAIT :',this.forfaitForm.value);
  }
  constructor(private ForfaitServices: ForfaitService) { }

  ngOnInit(): void {
  }

  changeState(e) {
    switch(e.target.value){
      case 'Appel' :
        this.listeMode = this.modeAppel;
        this.typeAppel();
        break;
      case 'Sms':
        this.listeMode = this.modeSms;
        this.typeSms();
        break;
      case 'Internet':
        this.listeMode = this.modeMega;
        this.typeMega();
        default :
          this.listeMode = this.modeAppel;
          this.typeFull();
    }

    console.log(e.target.value);
  }

  }
