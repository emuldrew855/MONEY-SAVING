import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';

import { SharedService } from '../shared/shared.service';


@Component({
    selector: 'app-calender-view',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calender-view.html'
})

export class CalenderComponent implements OnInit, DoCheck {
    @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>;
    refresh: Subject<any> = new Subject();
    view = 'month';
    dayTotal = 0;
    weekTotal = 0;
    totalInput = 0;
    totalOutput = 0;
    viewDate: Date = new Date();
    activeDayIsOpen = true;
    @Output() outputDate = new EventEmitter<Date>();
    @Input() events: CalendarEvent[] = [];
    keysArray:[String, String] =  ['',''];


    modalData: {
        action: string;
        event: CalendarEvent;
    };

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    findWeekTotal(dayDate: CalendarMonthViewDay) {
        let totalInput = 0;
        let totalOutput = 0;

        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].start > addDays(dayDate.date, -7) && this.events[i].start <= dayDate.date) {
                if (this.events[i].color === this.sharedService.colors.green) {
                    totalInput = totalInput + this.events[i].amount;
                } else if (this.events[i].color === this.sharedService.colors.red) {
                    totalOutput = totalOutput - this.events[i].amount;
                }
            }
        }
        this.weekTotal =  (totalInput + totalOutput);
        dayDate.weekCost = this.weekTotal;
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
        body.forEach(day => {
            let totalInput = 0;
            let totalOutput = 0;
            day.totalCost = 0;
            this.dayTotal = 0;

            for (let i = 0; i < this.events.length; i++) {
                if (day.date.getDate() === this.events[i].start.getDate()) {
                    if (this.events[i].color === this.sharedService.colors.green) {
                        totalInput = totalInput + this.events[i].amount;
                    } else if (this.events[i].color === this.sharedService.colors.red) {
                        totalOutput = totalOutput - this.events[i].amount;
                    }
                }
            }
            this.dayTotal = (totalInput + totalOutput);
            day.totalCost = this.dayTotal;
            if (day.date.getDay() === 0) {
                this.weekTotal = 0;
                this.findWeekTotal(day);
            }
        });
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        this.viewDate = date;
        this.outputDate.emit(this.viewDate);
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
        }
    }
    constructor(private modal: NgbModal, private sharedService: SharedService) {

    }

    ngOnInit() {

    }

    ngDoCheck() {
        this.refresh.next();
    }
}
