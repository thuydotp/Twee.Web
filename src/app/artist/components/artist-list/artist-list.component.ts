import { Component } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Artist } from "../../core/artist.interface";
import { ArtistService } from "../../core/artist.service";

@Component({
    selector: 'artist-list',
    moduleId: module.id,
    templateUrl: './artist-list.component.html',
    styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent {
    artists: Observable<Artist[]>;
    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private artistService: ArtistService)
    { }

    ngOnInit(): void {
        this.artists = this.route.paramMap
            .switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.artistService.getSongs();
            });
    }

    onSelect(artist: Artist) {
        //c1
        // this.router.navigate(['/artist-center', artist.id]);

        //c2 Navigate with relative link
        this.router.navigate([artist.id], { relativeTo: this.route });
    }

    isSelected(artist: Artist) { return artist.id === this.selectedId; }
}