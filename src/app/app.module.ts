import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { CoronaComponent } from './corona/corona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    FooterComponent,
    HeadComponent,
    BodyComponent,
    CoronaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
