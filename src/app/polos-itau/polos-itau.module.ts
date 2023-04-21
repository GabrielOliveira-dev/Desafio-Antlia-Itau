import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PolosItauService } from './polos-itau.service';
import { PolosItauComponent } from './polos-itau.component';
import { PolosItauRoutingModule } from './polos-itau.routing.module';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common'


registerLocaleData(ptBr);



@NgModule({
  declarations: [
    PolosItauComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    PolosItauRoutingModule,
    

    
  ],
  providers: [
    PolosItauService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class PolosItauModule { }
