import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES } from '../../app-routing.module';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  routeNames = ROUTE_NAMES;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigatePage(route: string) {
    this.router.navigate([route]);
  }
}
