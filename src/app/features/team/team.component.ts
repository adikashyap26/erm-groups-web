import { Component } from '@angular/core';
import { TeamBannerComponent } from './components/team-banner/team-banner.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    TeamBannerComponent,
    TeamMembersComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
