import { FormBuilderBase } from './form-builder-base';

export class FormTextInput extends FormBuilderBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
