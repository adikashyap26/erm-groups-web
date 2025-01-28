import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsrComponent } from './csr.component';
import { CsrInnerMainComponent } from './components/csr-inner-main/csr-inner-main.component';

const routes: Routes = [
  {
    path:'',
    component: CsrComponent
  },
  {
    path: ':url',
    component: CsrInnerMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsrRoutingModule { }
