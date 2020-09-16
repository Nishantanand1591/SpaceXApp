import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SpaceNameComponent } from './space-name/space-name.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpaceNameComponent,
    SideFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
