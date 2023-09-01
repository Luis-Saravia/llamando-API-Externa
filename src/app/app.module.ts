import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentsAngularMaterial } from 'src/assets/importComponents/material.components';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...componentsAngularMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
