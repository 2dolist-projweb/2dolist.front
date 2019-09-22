import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/listas.service';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-listagem-listas',
  templateUrl: './listagem-listas.component.html',
  styleUrls: ['./listagem-listas.component.css']
})
export class ListagemListasComponent implements OnInit {

  listas: Lista[];
  constructor(private listasService: ListaService) { }

  ngOnInit() {
    this.loadLists();
  }

  loadLists() {
      this.listasService.getListas().subscribe((rListas: Lista[]) => {
        this.listas = rListas;
    })
  }

  onDeleteItemLista(deletou) {
    if (deletou)
    {
      this.loadLists();
    }
  }

}
