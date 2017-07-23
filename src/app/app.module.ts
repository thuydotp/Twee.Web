import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SongModule } from "./song/song.module";

import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";

import { AdminPageComponent } from "./admin/admin.component";
import { HomePageComponent } from "./home/homepage.component";
import { ErrorPageComponent } from "./error/error.component";
import { ArtistListComponent } from "./artist/components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./artist/components/artist-detail/artist-detail.component";
import { SongListComponent } from "./song/components/song-list/song-list.component";
import { SongDetailComponent } from "./song/components/song-detail/song-detail.component";



@NgModule({
  imports: [
    BrowserModule,
    SongModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

