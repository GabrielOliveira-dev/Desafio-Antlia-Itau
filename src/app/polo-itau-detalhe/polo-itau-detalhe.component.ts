import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { IBusiness } from '../polos-itau/models/IBusiness';
import { PolosItauService } from '../polos-itau/polos-itau.service';

@Component({
  selector: 'app-polo-itau-detalhe',
  templateUrl: './polo-itau-detalhe.component.html',
  styleUrls: ['./polo-itau-detalhe.component.scss']
})
export class PoloItauDetalheComponent implements OnInit {

  poloId!: number;
  poloData$!: Observable<IBusiness>;
  formulario!: FormGroup;
  poloDataForm!: IBusiness;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private polosItauService: PolosItauService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.poloData$ = this.route.paramMap.pipe(
      mergeMap(paramMap => {
        const idStr = paramMap.get('id');
        // Validando se idStr existe e se todos os caracteres são numericos
        if(idStr && /^[0-9]+$/.test(idStr)) {
          this.poloId = Number(idStr)
          return this.polosItauService.getPoloDetalhe(this.poloId)
        }else {
          return throwError(()=> 'Erro ao recuperar o id do Polo')
        }
      }),
      tap(data => this.setForm(data))

    );

  }


  private setForm(data: IBusiness) {


    this.formulario = this.formBuilder.group({
      nome: [data.name, [Validators.required]],
      business: [data.business, [Validators.required]],
      valuation: [data.valuation, [Validators.required]],
      cnpj: [data.cnpj, [Validators.required]],
      active: [data.active, [Validators.required]],
      cep: [null, [Validators.required]],
      rua: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
    });
    setTimeout(() => {
      this.formulario.controls['cep'].setValue(data.cep)
    });
    
  }

  cepResponse(res: any) {
    if(res.erro) {
      throw new Error('CEP INVALIDO')
    } else {
      this.formulario.patchValue({
        rua: res.logradouro,
        bairro: res.bairro,
        estado: res.uf,
        cidade: res.localidade,
      })
    }
  };

  onSubmit() {
    if(this.formulario.valid) {
      console.log(this.formulario)
      this.router.navigate(['/polos_itau'])
    } else {
      console.log('formulario invalido')
    }
  };

}
