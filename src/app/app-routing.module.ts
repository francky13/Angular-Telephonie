import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeComponent } from '../app/liste/liste.component';
import { FormulaireComponent } from './Components/formulaire/formulaire.component';
import { StatistiqueComponent } from './Components/statistique/statistique.component';
import { LoginComponent } from './login/login.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
  {path: 'Liste', component : ListeComponent},
  {path: 'Login', component : LoginComponent},
  {path: 'Table', component : FormulaireComponent},
  {path: 'Offre', component : OffreComponent },
  {path: 'Statistique', component : StatistiqueComponent },

{
    path: '',
    redirectTo: 'Liste',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
