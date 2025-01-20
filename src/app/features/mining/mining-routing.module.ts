import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiningComponent } from './mining.component';
import { MiningItemComponent } from './components/mining-item/mining-item.component';

const routes: Routes = [
  {
    path: '',
    component: MiningComponent
  },
  {
    path: ':url',
    component: MiningItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiningRoutingModule { }
