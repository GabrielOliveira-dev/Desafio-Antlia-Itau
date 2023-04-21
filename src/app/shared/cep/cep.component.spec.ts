import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CepComponent } from './cep.component';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared.module';
import { MatIconModule } from '@angular/material/icon';

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepComponent ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        SharedModule,
        MatIconModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    const ctrl = new FormControl(null);
    component.control = ctrl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cep service', fakeAsync(() => {
    spyOn(component['cepService'], 'consultaCep').and.returnValue(of({}));
    const cepStr = '14555-333';
    component.control.setValue(cepStr);
    tick(50);
    expect(component['cepService'].consultaCep).toHaveBeenCalledWith(cepStr);
  }));

  it('should not emit address when cep is null', fakeAsync(() => {
    spyOn(component['cepService'], 'consultaCep').and.returnValue(of({}));
    spyOn(component.cepResponse, 'emit');
    component.control.setValue(null);
    tick(50);
    expect(component.cepResponse.emit).not.toHaveBeenCalled();
  }));

  it('should emit address', fakeAsync(() => {
    spyOn(component['cepService'], 'consultaCep').and.returnValue(of({}));
    spyOn(component.cepResponse, 'emit');
    component.control.setValue('14555-333');
    tick(50);
    expect(component.cepResponse.emit).toHaveBeenCalled();
  }));
});
