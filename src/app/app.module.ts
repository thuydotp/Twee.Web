import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AdminPageComponent } from "./admin/admin.component";
import { HomePageComponent } from "./home/homepage.component";
import { ErrorPageComponent } from "./error/error.component";
import { ArtistListComponent } from "./artist/components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./artist/components/artist-detail/artist-detail.component";
import { SongListComponent } from "./song/components/song-list/song-list.component";
import { SongDetailComponent } from "./song/components/song-detail/song-detail.component";

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    data: { title: 'Twee: Administrator' }
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: { title: 'Twee: Homepage' }
  },
  {
    path: 'artists',
    component: ArtistListComponent,
    data: { title: 'Twee: Artist List' }
  },
  {
    path: 'artist/:id',
    component: ArtistDetailComponent,
    data: { title: 'Twee: Artist Detail' }
  },
  {
    path: 'songs',
    component: SongListComponent,
    data: { title: 'Twee: Song List' }
  },
  {
    path: 'song/:id',
    component: SongDetailComponent,
    data: { title: 'Twee: Song Detail' }
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: { title: 'Twee: Page Not Found' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { title: 'Twee: Page Not Found' }
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        useHash: true
      }
    )
  ],
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    SongListComponent,
    SongDetailComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

