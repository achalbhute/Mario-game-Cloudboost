import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { PrincessComponent } from './arena/princess/princess.component';


@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    PrincessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
