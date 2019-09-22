import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadosGrupoComponent } from './dados-grupo/dados-grupo.component';
import { NovaListaComponent } from './nova-lista/nova-lista.component';
import { ListagemListasComponent } from './listagem-listas/listagem-listas.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'listas', component: ListagemListasComponent },
    { path: 'nova-lista', component: NovaListaComponent },
    { path: 'time', component: DadosGrupoComponent }
];