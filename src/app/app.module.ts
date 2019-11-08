import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { YousicianListComponent } from './yousician-list/yousician-list.component';
import { SongLevelPipe } from './yousician-list/pipes/songlevel.pipe';
import { SongSearchPipe } from './yousician-list/pipes/songsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    YousicianListComponent,
    SongLevelPipe,
    SongSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
