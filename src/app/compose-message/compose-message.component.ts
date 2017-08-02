import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './compose-message.component.html',
    styleUrls: ['./compose-message.component.css']
})

export class ComposeMessageComponent {
    sending: boolean = false;
    details: string = '';
    constructor(private router: Router) { }

    send() {
        this.sending = true;
        this.details = 'Sending Message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup(): any {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    }
}