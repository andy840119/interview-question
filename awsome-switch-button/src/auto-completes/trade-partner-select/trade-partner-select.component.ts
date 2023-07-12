import { Component } from '@angular/core';
import {AutocompleteBaseComponent} from "../autocomplete-base.component";
import {HttpClient} from "@angular/common/http";

export type TTradePartner = {
  id: number;
  tp_name: string;
  tp_code: string;
  address: string;
}

@Component({
  selector: 'trade-partner-select',
  templateUrl: './trade-partner-select.component.html',
})
export class TradePartnerSelectComponent extends AutocompleteBaseComponent<TTradePartner> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getEndPoint(search: string): string {
    return `api/auto-complete/trade-partner?q=${search}`;
  }

  getInputText(item: TTradePartner): string {
    return item.tp_name;
  }

  getDisplayText(item: TTradePartner): string {
    return `${item.tp_name} - ${item.tp_code}`;
  }
}
