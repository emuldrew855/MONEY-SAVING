import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { EventAdderComponent } from '../app/event-adder/event-adder.component';
import { NewsComponent } from '../app/news-view/new-component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { LoginComponent } from '../app/log-in-view/log-in.component';
import { SignUpViewComponent } from './sign-up-view/sign-up-view.component';
import { ProfileViewComponent } from '../app/profile-view/profile-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

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
                },
                {
                  path: 'home',
                  component: HomeViewComponent,
                },
                {
                  path: 'login',
                  component: LoginComponent
                },
                {
                  path: 'home/signup',
                  component: SignUpViewComponent
                },
                {
                  path: 'profile',
                  component: ProfileViewComponent
                }
            ]
        },

    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
