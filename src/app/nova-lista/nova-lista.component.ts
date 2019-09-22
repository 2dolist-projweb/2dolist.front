import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaService } from '../services/listas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-lista',
  templateUrl: './nova-lista.component.html',
  styleUrls: ['./nova-lista.component.css']
})
export class NovaListaComponent implements OnInit {
  formLista: FormGroup;
  isSubmited = false;


  constructor(private formBuilder: FormBuilder, private listaService: ListaService, private router: Router) { }

  gravarLista() {
    this.listaService.postLista(this.formLista.value).subscribe(retorno => {
      this.router.navigateByUrl('/listas');
    });
  }

  ngOnInit() {
    this.formLista = this.formBuilder.group({
      descricao: ["", Validators.required],
      prioridade: ["", Validators.required],
      observacao: [""]
    });    
  }

}
