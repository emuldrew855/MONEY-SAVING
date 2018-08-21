import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, DoCheck } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewDay } from 'angular-calendar';
import {
    startOfDay, endOfDay, subDays, addDays,
    endOfMonth, isSameDay, isSameMonth, addHours
} from 'date-fns';
import { MonthViewDay } from 'calendar-utils';

const colors: any = {
    red: {
        primary: '#e74c3c',
        secondary: '#FAE3E3'
    },
    grey: {
        primary: '#e6e6e6',
        secondary: '#cccccc'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#2ECC71',
        secondary: '#27ae60'
    }
};

@Component({
    selector: 'app-calender-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calender-view.html',
    styleUrls: ['calender-view.css']
})

export class CalenderComponent implements OnInit, DoCheck {
    @ViewChild('modalContent') modalContent: TemplateRef<any>;
    eventId = 3;
    view = 'month';
    dayTotal = 0;
    weekTotal = 0;
    totalInput = 0;
    totalOutput = 0;
    viewDate: Date = new Date();
    showOutputDetails = false;
    showInputDetails = false;
    activeDayIsOpen = true;
    todaysDate = Date.now();
    inputEvents: CalendarEvent[] = [];
    outputEvents: CalendarEvent[] = [];
    modalData: {
        action: string;
        event: CalendarEvent;
    };
    inputTypes: String[] = ['Work', 'Loan', 'Gift'];
    outputTypes: String[] = ['Transport', 'Bills', 'Socialising', 'Food', 'Direct Debits', 'Shopping', 'Other'];

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [
        {
            id: 1,
            start: new Date('September 17, 2017'),
            end: new Date('September 17, 2017'),
            title: 'A 3 day event',
            type: 'Transport',
            amount: 10,
            color: colors.red,
            actions: this.actions
        },
        {
            id: 2,
            start: new Date('September 10, 2017'),
            end: new Date('September 10, 2017'),
            title: 'Meal with Lauren',
            type: 'Socialising',
            amount: 10,
            color: colors.red,
            actions: this.actions
        },
        {
            id: 3,
            start: new Date('September 10, 2017'),
            end: new Date('September 10, 2017'),
            title: 'Wednesday Shift',
            type: 'Money Earnt',
            amount: 10,
            color: colors.green,
            actions: this.actions
        },
        {
            id: 4,
            start: new Date('September 9, 2017'),
            end: new Date('September 9, 2017'),
            title: 'Saturday Shift',
            type: 'Money Earnt',
            amount: 10,
            color: colors.green,
            actions: this.actions
        },
    ];
    constructor(private modal: NgbModal) { }

    ngOnInit() {
    }

    ngDoCheck() {
        // this.refresh.next();
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
        }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        console.log('Event: ' + event);
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    addInputEvent(): void {
        this.eventId++;
        const eventColor = colors.green;
        this.inputEvents.push({
            id: this.eventId,
            title: 'New event',
            start: startOfDay(Date.now()),
            end: endOfDay(Date.now()),
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
        const eventColor = colors.red;
        this.eventId++;
        this.outputEvents.push({
            id: this.eventId,
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
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

    toggleShowOutputDetails() {
        this.showOutputDetails = !this.showOutputDetails;
    }

    toggleShowInputDetails() {
        this.showInputDetails = !this.showInputDetails;
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
        this.weekTotal = 0;
        body.forEach(day => {
            let weekDate = new Date('September 3, 2017');
            let totalInput = 0;
            let totalOutput = 0;
            day.totalCost = 0;
            day.weekCost = 0;


            for (let i = 0; i < this.events.length; i++) {
                if (day.date.getDate() === this.events[i].start.getDate()) {
                    if (this.events[i].color === colors.green) {
                        totalInput = totalInput + this.events[i].amount;
                    } else if (this.events[i].color === colors.red) {
                        totalOutput = totalOutput - this.events[i].amount;
                    }
                }
                this.dayTotal = (totalInput + totalOutput);
                day.totalCost = this.dayTotal;
            }
            this.findWeekTotal(day, weekDate);
            console.log('');
            this.findWeekTotal(day, addDays(weekDate, 7));
            console.log('');
            this.findWeekTotal(day, addDays(weekDate, 14));

        });
    }

    findWeekTotal(dayDate: CalendarMonthViewDay, weekDate: Date) {
        if (dayDate.date > weekDate && dayDate.date <= addDays(weekDate, 7)) {
            console.log('Day: ' + dayDate.date + ' Day Cost: £' + dayDate.totalCost);
            this.weekTotal = this.weekTotal + dayDate.totalCost;
            console.log('Week Cost: £' + this.weekTotal);
            console.log(dayDate.date + ' ' + dayDate.weekCost);
        }
        dayDate.weekCost = this.weekTotal;
    }

}
