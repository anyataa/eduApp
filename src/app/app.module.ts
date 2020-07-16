import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LessonsComponent } from './main/lessons/lessons.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
