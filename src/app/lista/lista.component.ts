import { Component, OnInit, Input } from '@angular/core';
import { ListaService } from '../services/listas.service';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista: Lista;
  constructor () {}

  ngOnInit(): void {
  } 

  bodyClass(): string
  {
    var cssClass = "";
    switch(this.lista.prioridade) {
      case 0: cssClass = "card bg-danger";
      break;
      
      case 1: cssClass = "card bg-warning";
      break;

      case 2: cssClass = "card bg-info";
      break;

      case 3: cssClass = "card bg-info";
      break;

      case 4: cssClass = "card bg-light";
      break;

      default: cssClass = "card bg-light";
      break;
    }
    
    return cssClass;
  }
}
