import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PolosItauComponent } from './polos-itau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PolosItauRoutingModule } from './polos-itau.routing.module';

describe('PolosItauComponent', () => {
  let component: PolosItauComponent;
  let fixture: ComponentFixture<PolosItauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolosItauComponent ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        SharedModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        PolosItauRoutingModule,
      ]
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
