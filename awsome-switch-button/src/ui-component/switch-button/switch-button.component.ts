import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component} from "@angular/core";

type TOnChange = (checked: boolean) => void;

@Component({
  selector: 'switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitchButtonComponent,
      multi: true,
    },
  ],
})
export class SwitchButtonComponent implements ControlValueAccessor {
  protected checked = false;
  private onChange: TOnChange | null = null;

  disabled?: boolean;

  constructor() {
  }

  handleCheckboxInputChange(e: Event): void {
    const button = e.target as HTMLInputElement;
    this.checked = button.matches("[aria-pressed=true]");

    if(this.onChange)
      this.onChange(this.checked);
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: TOnChange): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
