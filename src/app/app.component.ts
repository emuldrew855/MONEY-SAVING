import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { FirebaseService } from './shared/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Money Saving Application';
  items: AngularFireList<String>;
  response: string;

  constructor(db: AngularFireDatabase, private firebaseService: FirebaseService) {
    this.items = db.list('/items');
  }

  onSubmit(title: string) {
    console.log('Send Info Method');
    this.firebaseService.addEvent(title).subscribe(response => this.response = JSON.stringify(response),
      (err) => {
        // Error Messages
        console.log('This did not work');
      }, () => {
        // Success Messages
        console.log('This worked');
      });
  }

  onGetEvent() {
    console.log('Get Info Method');
    this.firebaseService.getEvent().subscribe(response => this.response = JSON.stringify(response),
      (err) => {
        // Error Messages
        console.log('This did not work!');
      }, () => {
        // Success Messages
        console.log('This worked');
      });
  }

}
