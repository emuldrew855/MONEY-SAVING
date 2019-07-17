import { SharedService } from './../shared/shared.service';
import { Component} from '@angular/core';


@Component({
    selector: 'home-view',
    templateUrl: 'home-view.html',
    styleUrls: ['./home-view.css']
})

export class HomeViewComponent {

  constructor(public sharedService: SharedService) {

  }

}
