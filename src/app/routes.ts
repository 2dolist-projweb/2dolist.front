import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadosGrupoComponent } from './dados-grupo/dados-grupo.component';
import { NovaListaComponent } from './nova-lista/nova-lista.component';
import { ListagemListasComponent } from './listagem-listas/listagem-listas.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registrar', component: RegisterComponent},
    { path: 'time', component: DadosGrupoComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'listas', component: ListagemListasComponent },
            { path: 'nova-lista', component: NovaListaComponent },
            { path: '**', redirectTo: 'home', pathMatch: 'full'}
        ]
    },

];