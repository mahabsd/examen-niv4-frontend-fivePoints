import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import bootstrap from "bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { NavBarComponent } from './parent/nav-bar/nav-bar/nav-bar.component';
import { SignupComponent } from './parent/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListSondComponent } from './parent/list-sond/list-sond.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavBarComponent,
    routingComponents,
    SignupComponent,
    ListSondComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }