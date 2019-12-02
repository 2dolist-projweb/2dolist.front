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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemListaComponent,
    NavBarComponent,
    HomeComponent,
    DadosGrupoComponent,
    NovaListaComponent,
    ListagemListasComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
         tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost/api/auth']
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
