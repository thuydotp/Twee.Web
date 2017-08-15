import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent { 
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
        .queryParamMap
        .map(params => params.get('session_id') || 'None');

        // Capture the fragment if available
        this.token = this.route
        .fragment
        .map(fragment => fragment || 'None');
    }
}