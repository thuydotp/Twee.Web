import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminPageComponent } from './admin.component';
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ManageArtistComponent } from "./components/manage-artist/manage-artist.component";
import { ManageSongComponent } from "./components/manage-song/manage-song.component";

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminPageComponent,
        children: [
            { path: 'manage-artist', component: ManageArtistComponent },
            { path: 'manage-song', component: ManageSongComponent },
            { path: '', component: AdminDashboardComponent }
        ],
        data: { title: 'Twee: Administrator' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }