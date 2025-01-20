import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { NgFor, NgIf } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgFor,
    NgIf,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SlickCarouselModule,
    NgFor,
    NgIf,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
