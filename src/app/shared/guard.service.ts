import { SharedService } from './shared.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class GuardService implements CanActivate {
    constructor(private _router: Router, private sharedService: SharedService) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.sharedService.signedIn) {
            this._router.navigate(['']);
            return false;
        };
        return true;
    }
}
