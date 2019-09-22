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
}
