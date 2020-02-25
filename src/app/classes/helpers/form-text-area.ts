import {FormBuilderBase} from './form-builder-base';

export class FormTextArea extends FormBuilderBase<string>{
    controlType = 'text-area';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
