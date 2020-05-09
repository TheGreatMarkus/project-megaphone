import { Injectable } from '@angular/core';

export enum Page {
  ABOUT,
  PROJECT,
  EXPERIENCE,
  CONTACT,
  NONE,
}

/**
 * Temporary solution to how Github Pages routing works.
 *
 * Will be replaced by proper Angular Routing when migrating
 * to a proper Web Hosting Solution.
 */
@Injectable({
  providedIn: 'root',
})
export class PageRouterService {
  public activePage = Page.NONE;

  constructor() {}

  aboutPageActive() {
    return this.activePage === Page.ABOUT;
  }

  projectPageActive() {
    return this.activePage === Page.PROJECT;
  }

  experiencePageActive() {
    return this.activePage === Page.EXPERIENCE;
  }

  contactPageActive() {
    return this.activePage === Page.CONTACT;
  }

  pageActive() {
    return this.activePage !== Page.NONE;
  }
}
