import { Component } from '@angular/core';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private navBarService: NavBarService) {}

  toggleSideBar() {
    this.navBarService.toggleSideBar();
  }
}
