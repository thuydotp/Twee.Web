import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArtistComponent } from "./artist.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./components/artist-detail/artist-detail.component";
import { CanDeactivateGuard } from "../core/services/can-deactivate-guard.service";
import { ArtistResolverService } from "./core/artist-resolver.service";

const artistRoutes : Routes = [
    {
        path: 'artist-center',
        component: ArtistComponent,
        children: [
            {
                path: ':id',
                canDeactivate: [CanDeactivateGuard],
                component: ArtistDetailComponent,
                resolve: {
                    artist: ArtistResolverService
                }
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
    exports: [RouterModule],
    providers: [ArtistResolverService]
})

export class ArtistRoutingModule {} 