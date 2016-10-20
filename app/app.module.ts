import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Thing1Component }   from './thing1s.component';
import { Thing2Component }   from './thing2s.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    Thing1Component,
    Thing2Component
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
