import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { DadosGrupoComponent } from './dados-grupo/dados-grupo.component';
import { NovaListaComponent } from './nova-lista/nova-lista.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'listas', component: ListaComponent },
    { path: 'nova-lista', component: NovaListaComponent },
    { path: 'time', component: DadosGrupoComponent }
];