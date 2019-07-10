import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarMonthViewDay } from 'angular-calendar';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'piechart',
  templateUrl: 'pie-stats.html'
})
export class PieChartComponent implements OnChanges {
  // Pie
  @Input() inputEvents: CalendarEvent[] = [];
  @Input() outputEvents: CalendarEvent[] = [];
  @Input() showOutput: boolean;
  outputChartLabels: string[] = this.sharedService.outputLabels;
  outputChartData: number[] = [0, 0, 0, 0, 0, 0, 0];
  @Input() showInput: boolean;
  inputChartLabels: string[] = this.sharedService.intputLabels;
  inputChartData: number[] = [0, 0, 0];
  pieChartType: string = 'pie';

  constructor(private sharedService: SharedService) {}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnChanges() {
    for (let i = 0; i < this.outputEvents.length; i++) {
      for (let j = 0; j < this.outputChartLabels.length; j++ ) {
          if (this.outputChartLabels[j].toString() === this.outputEvents[i].type.toString()) {
            this.outputChartData[j] += this.outputEvents[i].amount;
            console.log(this.outputChartLabels[j].toString() + '=' + this.outputEvents[i].amount);
          }
        }
    }

    for (let i = 0; i < this.inputEvents.length; i++) {
      for (let j = 0; j < this.inputChartLabels.length; j++ ) {
          if (this.inputChartLabels[j].toString() === this.inputEvents[i].type.toString()) {
            this.inputChartData[j] += this.inputEvents[i].amount;
            console.log(this.inputChartLabels[j].toString() + '=' + this.inputEvents[i].amount);
          }
        }
    }
  }
}
