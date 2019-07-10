
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { UserProfile } from '../shared/userprofile';

@Injectable()
export class SharedService {
     colors: any = {
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

    signedIn: boolean = false;
    username: string = '';

    userProfiles: UserProfile[];

    inputEvents: CalendarEvent[] = [
      {
          id: 1,
          start: new Date('September 17, 2018'),
          end: new Date('September 17, 2018'),
          title: 'A 3 day event',
          type: 'Work',
          amount: 10,
          color: this.colors.red
      },
      {
          id: 2,
          start: new Date('September 10, 2018'),
          end: new Date('September 10, 2018'),
          title: 'Gruelling shift at the Grouse',
          type: 'Work',
          amount: 40,
          color: this.colors.red
      },
      {
          id: 3,
          start: new Date('September 10, 2018'),
          end: new Date('September 10, 2018'),
          title: 'Wednesday Shift',
          type: 'Work',
          amount: 16,
          color: this.colors.green
      },
      {
          id: 4,
          start: new Date('September 9, 2018'),
          end: new Date('September 9, 2018'),
          title: 'Owed Money',
          type: 'Loan',
          amount: 5,
          color: this.colors.green
      },
  ];

    outputEvents: CalendarEvent[] = [
        {
            id: 1,
            start: new Date('September 17, 2018'),
            end: new Date('September 17, 2018'),
            title: 'A 3 day event',
            type: 'Transport',
            amount: 10,
            color: this.colors.red
        },
        {
            id: 2,
            start: new Date('September 10, 2018'),
            end: new Date('September 10, 2018'),
            title: 'Meal with Ben',
            type: 'Bills',
            amount: 40,
            color: this.colors.red
        },
        {
            id: 3,
            start: new Date('September 10, 2018'),
            end: new Date('September 10, 2018'),
            title: 'Wednesday Shift',
            type: 'Socialising',
            amount: 16,
            color: this.colors.green
        },
        {
            id: 4,
            start: new Date('September 9, 2018'),
            end: new Date('September 9, 2018'),
            title: 'Saturday Shift',
            type: 'Food',
            amount: 5,
            color: this.colors.green
        },
    ];

    outputLabels: string[] = ['Transport', 'Bills', 'Socialising', 'Food',  'Direct Debits', 'Shopping', 'Other'];

    intputLabels: string[] = ['Work', 'Loan', 'Gift'];
  }
