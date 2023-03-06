import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sideBarStyle = 'folded-in';
  sideBarFoldedIn = true;

  setSideBarStyle() {
    if (this.sideBarFoldedIn) {
      this.sideBarStyle = 'folded-out';
      this.sideBarFoldedIn = false;
    } else {
      this.sideBarStyle = 'folded-in';
      this.sideBarFoldedIn = true;
    }
  }
}
