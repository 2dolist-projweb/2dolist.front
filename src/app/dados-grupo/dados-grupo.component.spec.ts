import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosGrupoComponent } from './dados-grupo.component';

describe('DadosGrupoComponent', () => {
  let component: DadosGrupoComponent;
  let fixture: ComponentFixture<DadosGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
