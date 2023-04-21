import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoloItauDetalheComponent } from './polo-itau-detalhe/polo-itau-detalhe.component';


const routes: Routes = [
    {path: 'polos_itau',
        loadChildren: () => import('./polos-itau/polos-itau.module').then(moduleName => moduleName.PolosItauModule)
    },
    {path: 'polo_detalhe/:id', component: PoloItauDetalheComponent},
    {path: '', redirectTo: '/polos_itau', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }