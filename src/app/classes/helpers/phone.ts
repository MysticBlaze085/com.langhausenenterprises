import { FormBuilderBase } from './form-builder-base';

export class Phone extends FormBuilderBase<number> {
  controlType = 'phone';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
