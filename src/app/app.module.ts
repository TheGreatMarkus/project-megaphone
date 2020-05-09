import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { TypingMessageComponent } from './components/typing-message/typing-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    TypingMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
