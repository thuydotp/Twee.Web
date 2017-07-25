import { Artist } from "./artist.interface";

const ARTISTS: Artist[] = [
    <Artist>{ id: 1, name: 'The Chainsmokers, Halsey' },
    <Artist>{ id: 2, name: 'Ed Sheeran' },
    <Artist>{ id: 3, name: 'Zedd' },
    <Artist>{ id: 4, name: 'Charlie Puth' },
    <Artist>{ id: 5, name: 'Bruno Mars' }
];
export class ArtistService {
    private artistsPromise = Promise.resolve(ARTISTS);

    getSongs() {
        return this.artistsPromise;
    }

    getItemById(id: number | string) {
        return this.artistsPromise
            // (+) before `id` turns the string into a number
            .then(artists => artists.find(item => item.id === +id));
    };
}