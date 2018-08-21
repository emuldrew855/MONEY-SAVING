import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FirebaseService } from './firebase.service';

@NgModule
    ({
        declarations: [
        ],
        imports: [
            CommonModule,
            FormsModule,
            HttpModule
        ],
        exports: [CommonModule,
                    FormsModule,
                    HttpModule],
        providers: [FirebaseService],
        bootstrap: []

    })

export class SharedModule {

}
