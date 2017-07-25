import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Artist } from "../../core/artist.interface";
import { ArtistService } from "../../core/artist.service";

@Component({
    selector: 'artist-detail',
    moduleId: module.id,
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css']
})

export class ArtistDetailComponent implements OnInit {
    artist: Artist;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private artistService: ArtistService
    )
    { }

    ngOnInit() {
        //c1
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                // (+) before `id` turns the string into a number
                this.artistService.getItemById(+params.get('id'))
            )
            .subscribe((artist: Artist) => this.artist = artist);

        // c2: the no-observable alternative
        // let id = this.route.snapshot.paramMap.get('id');
        // this.songService.getItemById(+id)
        //     .then((song: Song) => this.song = song);
    }

    gotoArtists() {
        let artistId = this.artist ? this.artist.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.

        //c1
        // this.router.navigate(['/artist-center', { id: artistId }]);

        //c2: Relative navigation
        this.router.navigate(['../', { id: artistId }], { relativeTo: this.route })
    }
}