import { Component } from '@angular/core';
import { LoaderService } from '../../service/loader.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loading$.subscribe(
      (loading) => this.isLoading = loading
    );
  }
}
