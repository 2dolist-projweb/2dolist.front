import { Component } from '@angular/core';
import { ListaService } from './services/listas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from './models/lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  listas: Lista[];

  constructor (private listasService: ListaService) {}

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
