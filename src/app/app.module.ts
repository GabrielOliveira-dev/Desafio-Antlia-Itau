import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PoloItauDetalheComponent } from './polo-itau-detalhe/polo-itau-detalhe.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PoloItauDetalheComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    SharedModule,
    NgxMaskModule.forRoot()
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
