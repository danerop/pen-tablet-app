import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContaseniaComponent } from './recuperar-contasenia.component';

describe('RecuperarContaseniaComponent', () => {
  let component: RecuperarContaseniaComponent;
  let fixture: ComponentFixture<RecuperarContaseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarContaseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarContaseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
