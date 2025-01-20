import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CompanyRoutingModule } from './company-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
  ]
})
export class CompanyModule { }
