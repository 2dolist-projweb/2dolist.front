import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/listas.service';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor (private listasService: ListaService) {}

  listas: Lista[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadLists();
  }

  loadLists() {
    this.listasService.getUsers().subscribe((rListas: Lista[]) => {
      this.listas = rListas;
    })
  }  
}
