import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES } from '../../app-routing.module';
import { PageRouterService, Page } from 'src/app/services/page-router.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  pages = Page;

  constructor(public pageRouter: PageRouterService) {}

  navigatePage(page: Page) {
    this.pageRouter.activePage = page;
  }
}
