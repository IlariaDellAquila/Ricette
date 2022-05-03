import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RicetteComponent } from './components/ricette/ricette.component';
import { RicettaComponent } from './components/ricetta/ricetta.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddRecipComponent } from './components/add-recip/add-recip.component';
import { UpDateComponent } from './components/up-date/up-date.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    RicetteComponent,
    RicettaComponent,
    DetailComponent,
    AddRecipComponent,
    UpDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
