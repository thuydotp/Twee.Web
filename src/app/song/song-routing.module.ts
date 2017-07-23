import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SongListComponent } from "./components/song-list/song-list.component";
import { SongDetailComponent } from "./components/song-detail/song-detail.component";

const songRoutes: Routes = [
    {
        path: 'songs',
        component: SongListComponent,
        data: { title: 'Twee: Song List' }
    },
    {
        path: 'song/:id',
        component: SongDetailComponent,
        data: { title: 'Twee: Song Detail' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(songRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class SongRoutingModule { }