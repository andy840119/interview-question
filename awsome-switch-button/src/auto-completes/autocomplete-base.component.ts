import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import {Observable} from "rxjs";

@Component({
  selector: 'autocompleteParent',
  template: '',
})
export abstract class AutocompleteBaseComponent<TObject> implements OnChanges {

  // todo: should use ng-model instead.
  @Input('hcModel') model?: TObject;
  @Output() leave = new EventEmitter();

  // get ng-select component form the child template.
  @ViewChild('ngSelect', { static: true }) ngSelect: NgSelectComponent = null!;
  @ViewChild('ngSelect', { static: true, read: ElementRef }) ngSelectRawElement: ElementRef = null!;

  // get the search input element from the child template.
  @ViewChild('searchInput') searchInput: ElementRef = null!;

  // get the focus event if use press the tab event to the input.
  @HostListener('focus')
  onFocus() {
    this.focus();
  }

  // this observable will store all the dropdown items.
  protected search$: Observable<TObject[]> = null!;

  protected constructor(
    protected http: HttpClient,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // do the search when the model changes.
    if (changes.model) {
      this.loadAutoCompleteOptions();
    }
  }

  /*
   * will be called in the child template
   */
  protected onModelChange(model: TObject): void {
    // change the model.
    this.model = model;
    // emit the leave event.
    this.leave.emit();
  }

  /*
   * will be called in the child template
   */
  protected onSearchInputKeydown(event: KeyboardEvent): void {
    // do the search when the model changes.
    this.loadAutoCompleteOptions();
  }

  private loadAutoCompleteOptions(): void {
    const keyword = this.searchInput.nativeElement.value;
    this.search$ = this.http.get<TObject[]>(this.getEndPoint(keyword));
  }

  /*
   * will be called in the child template
   */
  protected onOpen(): void {
    this.ngSelect.focus();
  }

  /*
   * will be called in the child template
   */
  protected onClose(): void {
    this.focus();
  }

  protected get isOpen(): boolean {
    return this.ngSelect.isOpen;
  }

  /*
   * will be called in the child template
   */
  protected focus(): void {
    this.ngSelect.focus();
  }

  /*
   * will be called in the child template
   */
  protected open(): void {
    this.ngSelect.open();
  }

  /*
   * will be called in the child template
   */
  protected onClear(): void {
    this.ngSelect.filter('');
  }

  // override this method for able to change the endpoint
  abstract getEndPoint(search: string): string;

  abstract getInputText(item: TObject): string;

  abstract getDisplayText(item: TObject): string;
}
