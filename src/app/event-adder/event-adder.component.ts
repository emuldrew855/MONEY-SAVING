import { Component, OnInit, DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';
import {
    startOfDay, endOfDay, subDays, addDays,
    endOfMonth, isSameDay, isSameMonth, addHours
} from 'date-fns';

import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'event-adder',
    templateUrl: 'event-adder.html',
    styleUrls: ['event-adder.css']
})

export class EventAdderComponent implements OnInit, DoCheck {
    eventId = 3;
    viewDate: Date = new Date();
    inputEvents: CalendarEvent[] = [];
    outputEvents: CalendarEvent[] = [];
    events: CalendarEvent[] = [];
    inputTypes: String[] = ['Work', 'Loan', 'Gift'];
    outputTypes: String[] = ['Transport', 'Bills', 'Socialising', 'Food', 'Direct Debits', 'Shopping', 'Other'];

    refresh: Subject<any> = new Subject();

    constructor(private modal: NgbModal, private sharedService: SharedService, private modalService: NgbModal) {
    }

    ngOnInit() {
       this.events = this.sharedService.events;
    }

    ngDoCheck() {
        this.refresh.next();
    }

    saveData(viewDate: Date) {
        this.viewDate = viewDate;
    }

    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
      }

    addInputEvent(): void {
        this.eventId++;
        const eventColor = this.sharedService.colors.green;
        this.inputEvents.push({
            id: this.eventId,
            title: 'New event',
            start: this.viewDate,
            end: this.viewDate,
            color: eventColor,
            type: 'Transport',
            amount: 10,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        let x = 0;
        for (let i = 0; i < this.inputEvents.length; i++) {
            x = i;
        }
        this.events.push(this.inputEvents[x]);
        this.refresh.next();
    }

    addOutputEvent(): void {
        const eventColor = this.sharedService.colors.red;
        this.eventId++;
        this.outputEvents.push({
            id: this.eventId,
            title: 'New event',
            start: this.viewDate,
            end: this.viewDate,
            color: eventColor,
            type: 'Transport',
            amount: 10,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });

        let x = 0;
        for (let i = 0; i < this.outputEvents.length; i++) {
            x = i;
        }
        this.events.push(this.outputEvents[x]);
        this.refresh.next();
    }

    deleteEvents(event: CalendarEvent) {
        for (let i = 0; i < this.events.length; i++) {
            if (event.id === this.events[i].id) {
                this.events.splice(i);
                this.refresh.next();
            }
        }
    }
}
