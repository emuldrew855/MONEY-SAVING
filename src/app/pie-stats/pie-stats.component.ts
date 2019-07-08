import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarMonthViewDay } from 'angular-calendar';


@Component({
  selector: 'piechart',
  templateUrl: 'pie-stats.html'
})
export class PieChartComponent implements OnChanges {
  // Pie
  @Input() events: CalendarEvent[] = [];
  @Input() showOutput: boolean;
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any): void {
    console.log(e);
  }

  ngOnChanges() {
    this.pieChartLabels = [];
    this.pieChartData = [];
    for (let i = 0; i < this.events.length; i++) {
        console.log('Events Type: ' + i + ' ' + this.events[i].type);
        this.pieChartLabels.push(this.events[i].type);
        this.pieChartData.push(this.events[i].amount);
    }
  }
}
