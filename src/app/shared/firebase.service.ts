
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';

import { CalendarEvent } from 'angular-calendar';

@Injectable()
export class FirebaseService {

    constructor(private httpService: Http) {}

    addEvent(title: string) {
        const body = JSON.stringify(title);

        return this.httpService.put('https://https://money-saving-de377.firebaseio.com/events.json', body).pipe(
        map(response => response.json()));
    }

    getEvent() {
        return this.httpService.get('https://https://money-saving-de377.firebaseio.com/events.json').pipe(
        map(response => response.json()));
    }
}
