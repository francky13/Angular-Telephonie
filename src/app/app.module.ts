import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './Components/formulaire/formulaire.component';
import { ListeOffreComponent } from './Components/liste-offre/liste-offre.component';
import { OffreComponent } from './offre/offre.component';
import { StatistiqueComponent } from './Components/statistique/statistique.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    TableComponent,
    NavbarComponent,
    LoginComponent,
    FormulaireComponent,
    ListeOffreComponent,
    OffreComponent,
    StatistiqueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
