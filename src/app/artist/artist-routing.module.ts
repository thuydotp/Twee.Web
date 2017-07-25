import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArtistComponent } from "./artist.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./components/artist-detail/artist-detail.component";

const artistRoutes : Routes = [
    {
        path: 'artist-center',
        component: ArtistComponent,
        children: [
            {
                path: ':id',
                component: ArtistDetailComponent
            },
            {
                path: '',
                component: ArtistListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(artistRoutes)
    ],
    exports: [RouterModule]
})

export class ArtistRoutingModule {}