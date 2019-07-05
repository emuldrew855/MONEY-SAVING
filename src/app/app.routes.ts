import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NewsComponent } from '../app/news-view/new-component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';

const routes: Routes =
    [
        { path: '', redirectTo: 'home', pathMatch: 'full' },

        {
            path: 'home',
            component: NavBarComponent,
            children: [
                {
                    path: 'eventadder',
                    component: EventAdderComponent
                },
                {
                  path: 'news',
                  component: NewsComponent
              }
            ]
        },

    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
