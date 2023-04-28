import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { ListPropertyCardComponent } from './components/list-property-card/list-property-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBannerComponent,
    PropertyCardComponent,
    ListPropertyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
