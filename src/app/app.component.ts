import { Component } from '@angular/core';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private navBarService: NavBarService){}

  declare sideBarOff: boolean;

  ngOnInit() {
    this.navBarService.isOpen$.subscribe(isOpen => this.sideBarOff = isOpen);
  }
  
  title = 'studdy-buddy';

}
