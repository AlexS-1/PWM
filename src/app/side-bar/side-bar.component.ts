import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  isSideBarOpen = false;

  constructor(private navBarService: NavBarService) {}

  ngOnInit() {
    this.navBarService.isOpen$.subscribe(isOpen => this.isSideBarOpen = isOpen);
  }

  toggleSideBar() {
    this.navBarService.toggleSideBar();
  }
}
