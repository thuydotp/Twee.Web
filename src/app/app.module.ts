import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { SongModule } from "./song/song.module";
import { ArtistModule } from "./artist/artist.module";
import { AdminModule } from "./admin/admin.module";

import { AppRoutingModule } from "./app-routing.module";
import { LoginRoutingModule } from "./login/login-routing.module";

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
import { HomePageComponent } from "./home/homepage.component";
import { ErrorPageComponent } from "./error/error.component";
import { SongListComponent } from "./song/components/song-list/song-list.component";
import { SongDetailComponent } from "./song/components/song-detail/song-detail.component";
import { LoginComponent } from "./login/login.component";
import { DialogService } from "./core/services/dialog.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SongModule,
    ArtistModule,
    AdminModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    HomePageComponent,
    LoginComponent,
    ErrorPageComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
