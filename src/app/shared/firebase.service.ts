
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';

import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class FirebaseService {

    constructor(private httpService: Http) { }

    addEvent(title: string) {
        const body = JSON.stringify(title);

        return this.httpService.put('https://money-saving-de377.firebaseio.com/Event1', body).pipe(
            map(response => response.json()));
    }

    getEvent() {
        return this.httpService.get('https://money-saving-de377.firebaseio.com/Event1').pipe(
            map(response => response.json()));
    }
}
