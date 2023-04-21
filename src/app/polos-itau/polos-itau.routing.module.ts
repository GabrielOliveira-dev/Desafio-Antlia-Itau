import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolosItauComponent } from './polos-itau.component';


const polosItauRoute: Routes = [
    {path: '', component: PolosItauComponent },
];

@NgModule({
    imports: [RouterModule.forChild(polosItauRoute)],
    exports: [RouterModule]
})
export class PolosItauRoutingModule { }