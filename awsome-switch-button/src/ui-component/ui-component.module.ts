import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SwitchButtonComponent} from "./switch-button/switch-button.component";

@NgModule({
  declarations: [SwitchButtonComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    SwitchButtonComponent
  ]
})
export class UiComponentModule { }
