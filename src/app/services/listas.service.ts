import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lista } from '../models/lista';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListaService{
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<Lista[]>{
        return this.http.get<Lista[]>(this.baseUrl + 'listas')
    }
}