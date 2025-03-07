import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { CallToActionComponent } from './common/call-to-action/call-to-action.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from './features/shared/shared.module';
import { ResponsiveService } from './service/responsive.service';
import { CommonModule } from '@angular/common';
import { ResponsiveHeaderComponent } from './common/responsive-header/responsive-header.component';
import { LoaderService } from './service/loader.service';
import { LoaderComponent } from './common/loader/loader.component';
import { NgIf } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoaderComponent,NgIf,ResponsiveHeaderComponent, CommonModule, HeaderComponent, CallToActionComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';
  private minDisplayTime = 2000;
  constructor(public responsiveService: ResponsiveService,private router: Router, private loaderService: LoaderService) {}


  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.loaderService.hide();
        }, this.minDisplayTime); 
      }
    });
  }
}
