import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SongService, Song } from "../../core/song.service";

@Component({
    selector: 'song-detail',
    moduleId: module.id,
    templateUrl: './song-detail.component.html',
    styleUrls: ['./song-detail.component.css']
})

export class SongDetailComponent implements OnInit {
    song: Song;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private songService: SongService
    )
    { }

    ngOnInit() {

        //c1
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                // (+) before `id` turns the string into a number
                this.songService.getItemById(+params.get('id'))
            )
            .subscribe((song: Song) => this.song = song);

        // c2: the no-observable alternative
        // let id = this.route.snapshot.paramMap.get('id');
        // this.songService.getItemById(+id)
        //     .then((song: Song) => this.song = song);
    }

    get dislayedTitle() {
        if (!this.song) {
            return 'Unknown song';
        }
        let songName = (this.song && this.song.name) ? this.song.name : 'Unknown song';
        let singer = this.song.singer ? this.song.singer : 'Unknown singer';
        return `${songName} - ${singer}`;
    }

    gotoSongs() {
        let songId = this.song ? this.song.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/songs', { id: songId, foo: 'foo' }]);
    }
}