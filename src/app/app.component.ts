import { Component } from '@angular/core';
import { Menu } from './shared/interfaces/menu.interface';
import { ActivatedRoute, Navigation, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-rep-admin-navbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleSideBar: boolean = false;
  title:string = '';
  active: Menu | undefined;
  menu: Menu[] = [
    {
      route: "/admin/welcome",
      icon: "bx bx-home-alt icon",
      title: "Welcome",
    },
    {
      route: "/admin/example/home1",
      icon: "bx bx-bar-chart-alt-2 icon",
      title: "Example 1"
    },
    {
      route: "/admin/example2/home2",
      icon: "bx bx-bell icon",
      title: "Example 2"
    },
  ]
  currentRoute: string | undefined;

  constructor(private router: Router) {
    this.activatedLink();
  }

  activatedLink() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.active = this.menu.filter(e => e.route === event.url)[0];
        this.title = this.active.title;
      }
    })
  }

  toggleMenu(): void {
    this.toggleSideBar = !this.toggleSideBar;
  }

  setTitle(title: string) {
    this.title = title;
  }


}
