import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SongModule } from "./song/song.module";
import { ArtistModule } from "./artist/artist.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AdminPageComponent } from "./admin/admin.component";
import { HomePageComponent } from "./home/homepage.component";
import { ErrorPageComponent } from "./error/error.component";
import { SongListComponent } from "./song/components/song-list/song-list.component";
import { SongDetailComponent } from "./song/components/song-detail/song-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    SongModule,
    ArtistModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

