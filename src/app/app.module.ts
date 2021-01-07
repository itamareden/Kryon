import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { RandomPanelComponent } from './components/random-panel/random-panel.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { JokeRowComponent } from './components/search-panel/joke-row/joke-row.component';
import { QueryDashboardComponent } from './components/query-dashboard/query-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    RandomPanelComponent,
    SearchPanelComponent,
    JokeRowComponent,
    QueryDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
