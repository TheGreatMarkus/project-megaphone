import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const ROUTE_NAMES = {
  about: 'about',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
};
const routes: Routes = [
  { path: ROUTE_NAMES.about, component: AboutPageComponent },
  { path: ROUTE_NAMES.projects, component: ProjectsPageComponent },
  { path: ROUTE_NAMES.experience, component: ExperiencePageComponent },
  { path: ROUTE_NAMES.contact, component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
