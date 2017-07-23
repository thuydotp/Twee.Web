import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SongService } from "./core/song.service";

import { SongListComponent } from "./components/song-list/song-list.component";
import { SongDetailComponent } from "./components/song-detail/song-detail.component";
import { SongRoutingModule } from "./song-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SongRoutingModule
    ],
    declarations: [
        SongListComponent,
        SongDetailComponent
    ],
    providers: [
        SongService
    ]
})

export class SongModule { }