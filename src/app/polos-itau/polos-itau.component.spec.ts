import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolosItauComponent } from './polos-itau.component';

describe('PolosItauComponent', () => {
  let component: PolosItauComponent;
  let fixture: ComponentFixture<PolosItauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolosItauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolosItauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
