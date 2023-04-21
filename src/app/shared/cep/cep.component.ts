import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CepService } from '../services/cep.service';
import { mergeMap, of, tap } from 'rxjs'

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  @Input() control!: FormControl;
  @Output() cepResponse = new EventEmitter()

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit(): void {


    if(!this.control) {
      throw new Error('CEP obrigatorio')
    }

    this.control.valueChanges.pipe(
      mergeMap(value => {
        if(/^\d{5}-\d{3}$/.test(value)) {
          return this.cepService.consultaCep(value)
        }
        return of (null)
      }),
      tap(res => {
        if(res) {
          this.cepResponse.emit(res)
        }
      })
    ).subscribe()
  }

}
