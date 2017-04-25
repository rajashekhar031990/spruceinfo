import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostajobComponent } from './postajob/postajob.component';
import { Routes, RouterModule } from '@angular/router';
import { NewseventsComponent } from './newsevents/newsevents.component';
import { PublicheaderComponent } from './publicheader.component';
import { PublicfooterComponent } from './publicfooter.component';
import { AdminfooterComponent } from './adminfooter.component';
import { AdminheaderComponent } from './adminheader.component';
import { ResumeComponent } from './resume/resume.component';

import { BrowseajobComponent } from './browseajob/browseajob.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LcaComponent } from './lca/lca.component';

const appRoutes : Routes = [
    { path: '', component: AppComponent},
  { path: 'postajob', component: PostajobComponent},
  { path: 'newsevents', component: NewseventsComponent},
  { path: 'resume', component: ResumeComponent},
  
  { path: 'itjobs', component: BrowseajobComponent },
  { path: 'desc', component: JobdescriptionComponent },
  { path: 'contactus', component: ContactusComponent},
  { path: 'lca', component: LcaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostajobComponent,
    NewseventsComponent,
    PublicheaderComponent,
    PublicfooterComponent,
    AdminfooterComponent,
    AdminheaderComponent,
    ResumeComponent,
    BrowseajobComponent,
    JobdescriptionComponent,
    ContactusComponent,
    LcaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
