import { FormTextInput } from './form-text-input';

export class FormSelectDropdown extends FormTextInput {
  controlType = 'dropdown';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
