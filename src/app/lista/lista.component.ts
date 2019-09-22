import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ListaService } from '../services/listas.service';
import { Lista } from '../models/lista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista: Lista;
  @Output() deleteLista = new EventEmitter();
  constructor (private listaService: ListaService, private router: Router) {}

  ngOnInit(): void {
  } 

  deleteItem() {
    this.listaService.deleteLista(this.lista.id).subscribe(retorno => {
      this.deleteLista.emit(true);
    });
    // this.router.navigateByUrl('/listas');
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
