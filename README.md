# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To ensure your project runs once you have clone it.
Run `npm install`first to install all the node modules 

Then please navigate to C:\Users\Administrator\Dev\MONEY-SAVING\node_modules\calendar-utils\dist 
and paste this piece of code over the top of it 

"export declare enum DAYS_OF_WEEK {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
}
export declare const SECONDS_IN_DAY: number;
export declare const SECONDS_IN_WEEK: number;
export interface WeekDay {
    date: Date;
    isPast: boolean;
    isToday: boolean;
    isFuture: boolean;
    isWeekend: boolean;
    cssClass?: string;
}
export interface EventColor {
    primary: string;
    secondary: string;
}
export interface EventAction {
    label: string;
    cssClass?: string;
    onClick({event}: {
        event: CalendarEvent;
    }): any;
}
export interface CalendarEvent<MetaType = any> {
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    type: string;
    amount: number;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
    meta?: MetaType;
}
export interface WeekViewEvent {
    event: CalendarEvent;
    offset: number;
    span: number;
    startsBeforeWeek: boolean;
    endsAfterWeek: boolean;
}
export interface WeekViewEventRow {
    row: WeekViewEvent[];
}
export interface WeekView {
    period: ViewPeriod;
    eventRows: WeekViewEventRow[];
}
export interface MonthViewDay<MetaType = any> extends WeekDay {
    inMonth: boolean;
    events: CalendarEvent[];
    backgroundColor?: string;
    badgeTotal: number;
    meta?: MetaType;
    totalCost: number;
}
export interface MonthView {
    rowOffsets: number[];
    days: MonthViewDay[];
    totalDaysVisibleInWeek: number;
    period: ViewPeriod;
}
export interface DayViewEvent {
    event: CalendarEvent;
    height: number;
    width: number;
    top: number;
    left: number;
    startsBeforeDay: boolean;
    endsAfterDay: boolean;
}
export interface DayView {
    events: DayViewEvent[];
    width: number;
    allDayEvents: CalendarEvent[];
    period: ViewPeriod;
}
export interface DayViewHourSegment {
    isStart: boolean;
    date: Date;
    cssClass?: string;
}
export interface DayViewHour {
    segments: DayViewHourSegment[];
}
export interface ViewPeriod {
    start: Date;
    end: Date;
    events: CalendarEvent[];
}
export declare function getWeekViewEventOffset({event, startOfWeek: startOfWeekDate, excluded, precision}: {
    event: CalendarEvent;
    startOfWeek: Date;
    excluded?: number[];
    precision?: 'minutes' | 'days';
}): number;
export interface GetEventsInPeriodArgs {
    events: CalendarEvent[];
    periodStart: Date;
    periodEnd: Date;
}
export declare function getEventsInPeriod({events, periodStart, periodEnd}: GetEventsInPeriodArgs): CalendarEvent[];
export interface GetWeekViewHeaderArgs {
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    weekendDays?: number[];
}
export declare function getWeekViewHeader({viewDate, weekStartsOn, excluded, weekendDays}: GetWeekViewHeaderArgs): WeekDay[];
export interface GetWeekViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    precision?: 'minutes' | 'days';
    absolutePositionedEvents?: boolean;
}
export declare function getWeekView({events, viewDate, weekStartsOn, excluded, precision, absolutePositionedEvents}: GetWeekViewArgs): WeekView;
export interface GetMonthViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    viewStart?: Date;
    viewEnd?: Date;
    weekendDays?: number[];
}
export declare function getMonthView({events, viewDate, weekStartsOn, excluded, viewStart, viewEnd, weekendDays}: GetMonthViewArgs): MonthView;
export interface GetDayViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    hourSegments: number;
    dayStart: {
        hour: number;
        minute: number;
    };
    dayEnd: {
        hour: number;
        minute: number;
    };
    eventWidth: number;
    segmentHeight: number;
}
export declare function getDayView({events, viewDate, hourSegments, dayStart, dayEnd, eventWidth, segmentHeight}: GetDayViewArgs): DayView;
export interface GetDayViewHourGridArgs {
    viewDate: Date;
    hourSegments: number;
    dayStart: any;
    dayEnd: any;
}
export declare function getDayViewHourGrid({viewDate, hourSegments, dayStart, dayEnd}: GetDayViewHourGridArgs): DayViewHour[];
export declare enum EventValidationErrorMessage {
    NotArray = "Events must be an array",
    StartPropertyMissing = "Event is missing the `start` property",
    StartPropertyNotDate = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.",
    EndPropertyNotDate = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.",
    EndsBeforeStart = "Event `start` property occurs after the `end`",
}
export declare function validateEvents(events: CalendarEvent[], log: (...args: any[]) => void): boolean;
"