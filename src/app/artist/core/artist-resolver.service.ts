import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Artist } from "./artist.interface";
import { ArtistService } from "./artist.service";

@Injectable()
export class ArtistResolverService implements Resolve<Artist>{
    constructor(private artistService : ArtistService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Artist | Observable<Artist> | Promise<Artist> {
        let id = route.paramMap.get('id');

        return this.artistService.getItemById(id).then(artist => {
            if(artist) { return artist;}
            this.router.navigate(['/artist-center'])
            return null;
        })
    }

}