import { Component, OnInit, Input } from '@angular/core';
import { ItemLista } from '../models/itemLista';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {
  @Input() itemLista: ItemLista;
  constructor() { }

  ngOnInit() {
  }

  check() {
    this.itemLista.finalizada = !this.itemLista.finalizada;
  }

}
