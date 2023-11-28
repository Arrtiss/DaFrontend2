import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerToolFunctionComponent } from "./container-tool-function/container-tool-function.component";
import { MatLabel } from '@angular/material/form-field';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContainerToolFunctionComponent,
    ]
})
export class AppModule { }
