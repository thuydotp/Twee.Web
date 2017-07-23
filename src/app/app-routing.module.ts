import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from "./admin/admin.component";
import { HomePageComponent } from "./home/homepage.component";
import { ErrorPageComponent } from "./error/error.component";
import { ArtistListComponent } from "./artist/components/artist-list/artist-list.component";
import { ArtistDetailComponent } from "./artist/components/artist-detail/artist-detail.component";

const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminPageComponent,
        data: { title: 'Twee: Administrator' }
    },
    {
        path: 'home',
        component: HomePageComponent,
        data: { title: 'Twee: Homepage' }
    },
    {
        path: 'artists',
        component: ArtistListComponent,
        data: { title: 'Twee: Artist List' }
    },
    {
        path: 'artist/:id',
        component: ArtistDetailComponent,
        data: { title: 'Twee: Artist Detail' }
    },
    {
        path: 'error',
        component: ErrorPageComponent,
        data: { title: 'Twee: Page Not Found' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        component: ErrorPageComponent,
        data: { title: 'Twee: Page Not Found' }
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }