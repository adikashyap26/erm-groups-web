import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

  descriptionUrl = '/api/ourTeam/ourTeamDescription';
  descriptionData: any;
  membersUrl = '/api/ourTeam/ourTeamLists';
  membersData: any;
  selectedMember: any = null;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.onLoadDescripton();
    this.onLoadMembersData();
  }
  onLoadDescripton(){
    this.http.get(this.descriptionUrl).subscribe(response => {
      this.descriptionData = response;
    })
  }
  onLoadMembersData(){
    this.http.get(this.membersUrl).subscribe(response => {
      this.membersData = response;
      console.log(this.membersData)
    })
  }

  onClickMember(id: any){
    this.selectedMember = this.membersData.find((p: any) => p._id == id)
    console.log(this.selectedMember)
  }
  closePopup() {
    this.selectedMember = null;
  }
}
