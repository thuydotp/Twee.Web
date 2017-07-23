import { Observable } from "rxjs/Observable";

let SONGS: Song[] = [
    <Song>{ id: 1, name: 'Closer', singer: 'The Chainsmokers, Halsey' },
    <Song>{ id: 2, name: 'Shape Of You', singer: 'Ed Sheeran' },
    <Song>{ id: 3, name: 'Daisy', singer: 'Zedd' },
    <Song>{ id: 4, name: 'Attention (Acoustic)', singer: 'Charlie Puth' },
    <Song>{ id: 5, name: "That's What I Like", singer: 'Bruno Mars' }
];
export class SongService {
    private songsPromise = Promise.resolve(SONGS);

    getSongs() {
        return this.songsPromise;
    }

    getItemById(id: number | string) {
        return this.songsPromise
            // (+) before `id` turns the string into a number
            .then(songs => songs.find(item => item.id === +id));
    };
}

export class Song {
    id: number;
    name: string;
    singer: string;
}