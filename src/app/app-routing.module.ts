import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTE_NAMES = {
  about: 'about',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
};

const routes: Routes = [
  // TODO: Router replaced by PageRouterService. To be reverted
  // { path: ROUTE_NAMES.about, component: AboutPageComponent },
  // { path: ROUTE_NAMES.projects, component: ProjectsPageComponent },
  // { path: ROUTE_NAMES.experience, component: ExperiencePageComponent },
  // { path: ROUTE_NAMES.contact, component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
