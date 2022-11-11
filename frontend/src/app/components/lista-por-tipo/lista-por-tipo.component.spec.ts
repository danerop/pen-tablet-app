import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorTipoComponent } from './lista-por-tipo.component';

describe('ListaPorTipoComponent', () => {
  let component: ListaPorTipoComponent;
  let fixture: ComponentFixture<ListaPorTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPorTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
