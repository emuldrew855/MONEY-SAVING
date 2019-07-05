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


}
