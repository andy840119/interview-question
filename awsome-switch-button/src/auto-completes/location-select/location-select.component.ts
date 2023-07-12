import { Component } from '@angular/core';
import {AutocompleteBaseComponent} from "../autocomplete-base.component";
import {HttpClient} from "@angular/common/http";

export type TLocation = {
  id: number;
  location: string;
  country: string;
  city: string;
  address: string;

  location_type: 'WAREHOUSE' | 'FACTOR';
}

@Component({
  selector: 'location-select',
  templateUrl: './location-select.component.html',
})
export class LocationSelectComponent extends AutocompleteBaseComponent<TLocation> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getEndPoint(search: string): string {
    return `api/auto-complete/location?q=${search}`;
  }

  getInputText(item: TLocation): string {
    return item.location;
  }

  getDisplayText(item: TLocation): string {
    return `${item.location} - (${item.country}, ${item.city})`;
  }

  getDisplayAddress(item: TLocation): string {
    return `${item.address}(${item.city})`;
  }
}
