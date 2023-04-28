import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rep-admin-navbar';
  toggleSideBar: boolean = false;

  constructor() {
  }

  toggleMenu(): void {
    this.toggleSideBar = !this.toggleSideBar;
  }


}
