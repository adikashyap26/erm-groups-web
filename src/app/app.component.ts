import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { CallToActionComponent } from './common/call-to-action/call-to-action.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from './features/shared/shared.module';
import { ResponsiveService } from './service/responsive.service';
import { CommonModule } from '@angular/common';
import { ResponsiveHeaderComponent } from './common/responsive-header/responsive-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ResponsiveHeaderComponent, CommonModule, HeaderComponent, CallToActionComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  constructor(public responsiveService: ResponsiveService) {}
}
