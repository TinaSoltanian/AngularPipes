import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortPipe,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
