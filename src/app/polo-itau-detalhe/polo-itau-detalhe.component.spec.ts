import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloItauDetalheComponent } from './polo-itau-detalhe.component';

describe('PoloItauDetalheComponent', () => {
  let component: PoloItauDetalheComponent;
  let fixture: ComponentFixture<PoloItauDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloItauDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoloItauDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
