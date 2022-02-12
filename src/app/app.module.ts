import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http'
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
