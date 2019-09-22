import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './lista/lista.component';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DadosGrupoComponent } from './dados-grupo/dados-grupo.component';
import { NovaListaComponent } from './nova-lista/nova-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListagemListasComponent } from './listagem-listas/listagem-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemListaComponent,
    NavBarComponent,
    HomeComponent,
    DadosGrupoComponent,
    NovaListaComponent,
    ListagemListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
