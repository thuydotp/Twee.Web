import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ArtistRoutingModule } from "./artist-routing.module";

import { ArtistComponent } from "./artist.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./components/artist-detail/artist-detail.component";

import { ArtistService } from "./core/artist.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArtistRoutingModule
    ],
    declarations: [
        ArtistComponent,
        ArtistListComponent,
        ArtistDetailComponent
    ],
    providers: [
        ArtistService
    ]
})

export class ArtistModule { }