import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemListasComponent } from './listagem-listas.component';

describe('ListagemListasComponent', () => {
  let component: ListagemListasComponent;
  let fixture: ComponentFixture<ListagemListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
