import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { ManageArtistComponent } from "./components/manage-artist/manage-artist.component";
import { ManageSongComponent } from "./components/manage-song/manage-song.component";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminPageComponent,
        AdminDashboardComponent,
        ManageArtistComponent,
        ManageSongComponent
    ]
})
export class AdminModule { }