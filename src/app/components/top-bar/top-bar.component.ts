import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES } from '../../app-routing.module';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  routes = ROUTE_NAMES;
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  getNgClass(page: string) {
    if (this.currentRoute === `/${page}`) {
      return 'bg-darker';
    }
    return 'bg-darkest';
  }
}
