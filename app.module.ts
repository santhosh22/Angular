import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from  './app.component'; 
import {HomeComponent} from  './app.home'; 
import { ProductComponent } from './Products/product.component';

@NgModule({
    // declare all modules, routers
        imports : [
            BrowserModule
        ],

        //componerts, pips, directives
        declarations: [
            AppComponent,
            HomeComponent,
            ProductComponent
        ],

        //one and only main components
        bootstrap:[
            AppComponent
        ],

        //service
        providers: []

    })




export class AppModule {


}