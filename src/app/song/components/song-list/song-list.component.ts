import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { SongService, Song } from "../../core/song.service";


@Component({
    selector: 'song-list',
    moduleId: module.id,
    templateUrl: './song-list.component.html',
    styleUrls: ['./song-list.component.css']
})

export class SongListComponent implements OnInit {
    songs: Observable<Song[]>;
    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private songService: SongService)
    { }

    ngOnInit(): void {
        this.songs = this.route.paramMap
            .switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.songService.getSongs();
            });
    }

    onSelect(song: Song) {
        this.router.navigate(['/song', song.id]);
    }

    isSelected(song: Song) { return song.id === this.selectedId; }
}