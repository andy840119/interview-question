import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TradePartnerSelectComponent } from './trade-partner-select.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [TradePartnerSelectComponent],
  exports: [TradePartnerSelectComponent],
})
export class TradePartnerSelectModule {}
