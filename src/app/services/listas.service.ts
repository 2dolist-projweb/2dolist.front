import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lista } from '../models/lista';
import { Observable } from 'rxjs';
import { ItemLista } from '../models/itemLista';

@Injectable({
    providedIn: 'root'
})

export class ListaService{
    baseUrl = environment.apiUrl;

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }    

    constructor(private http: HttpClient) { }

    getListas(): Observable<Lista[]>{
        return this.http.get<Lista[]>(this.baseUrl + 'listas')
    }

    postLista(lista: Lista) {
        return this.http.post<Lista>(this.baseUrl + 'listas', lista, this.httpOptions);
    }

    deleteLista(id: number) {
        return this.http.delete(this.baseUrl + 'listas/' + id);
    }

    getItemsLista(idLista: number) {
        return this.http.get<ItemLista[]>(this.baseUrl + 'tarefalista/lista/' + idLista);        
    }

    addItemLista(itemLista: any) {
        return this.http.post<Lista>(this.baseUrl + 'tarefalista/', itemLista);        
    }    
}