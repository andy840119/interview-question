import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocationSelectComponent } from './location-select.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [LocationSelectComponent],
  exports: [LocationSelectComponent],
})
export class LocationSelectModule {}
