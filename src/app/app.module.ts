import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, SortingComponent, FiltersComponent, PersonalComponent, BoardComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
