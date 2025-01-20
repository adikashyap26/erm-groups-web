import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path: ':url',
    component: CompanyItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
