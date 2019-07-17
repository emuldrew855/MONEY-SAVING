import { HomeViewComponent } from './home-view/home-view.component';
import { SignUpViewComponent } from './sign-up-view/sign-up-view.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { SharedService} from '../app/shared/shared.service';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender-view/calender-component';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { NewsComponent } from '../app/news-view/new-component';
import { PieChartComponent } from '../app/pie-stats/pie-stats.component';
import { LoginComponent } from '../app/log-in-view/log-in.component';
import { ProfileViewComponent } from '../app/profile-view/profile-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CalenderComponent,
    EventAdderComponent,
    NavBarComponent,
    NewsComponent,
    PieChartComponent,
    LoginComponent,
    SignUpViewComponent,
    ProfileViewComponent,
    NavigationBarComponent
  ],
  imports: [
    MatSlideToggleModule,
    FlexLayoutModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [SharedService],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
