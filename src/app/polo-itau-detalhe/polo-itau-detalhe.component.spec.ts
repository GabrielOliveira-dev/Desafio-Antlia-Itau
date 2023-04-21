import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PoloItauDetalheComponent } from './polo-itau-detalhe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

describe('PoloItauDetalheComponent', () => {
  let component: PoloItauDetalheComponent;
  let fixture: ComponentFixture<PoloItauDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloItauDetalheComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        SharedModule,
      ]
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
