import { Injectable } from '@angular/core';
import { FormTextInput } from '../classes/helpers/form-text-input';
import { FormBuilderBase } from '../classes/helpers/form-builder-base';
import { of } from 'rxjs';
import { Phone } from '../classes/helpers/phone';
import { FormTextArea } from '../classes/helpers/form-text-area';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  getContact() {
    let contact: (FormTextInput | Phone | FormTextArea)[] = [
      new FormTextInput({
        key: 'firstName',
        label: 'First Name',
        value: '',
        required: true,
        order: 1,
        class: 'col-6',
        validators: Validators.required,
        type: 'text'
      }),
      new FormTextInput({
        key: 'lastName',
        label: 'Last Name',
        value: '',
        required: true,
        order: 2,
        class: 'col-6',
        validators: Validators.required,
        type: 'text'
      }),
      new Phone({
        key: 'phoneNumber',
        label: 'Phone Number',
        value: '',
        required: true,
        order: 2,
        class: 'col-6',
        validators: Validators.required,
        type: 'tel'
      }),
      new FormTextInput({
        key: 'email',
        label: 'Email',
        value: '',
        required: true,
        order: 3,
        class: 'col-6',
        validators: [Validators.required, Validators.email],
        type: 'email'
      }),
      new FormTextArea({
        key: 'message',
        label: 'Message',
        placeholder:
          'Description of repair needed or questions you may have...',
        value: '',
        required: true,
        order: 4,
        class: 'col-12',
        type: 'text',
        validCheck: [Validators.required, Validators.minLength(15)]
      })
    ];

    return of(contact.sort((a, b) => a.order - b.order));
  }

  buildFormGroup(contactForm) {
    let group: any = {};
    contactForm.forEach(input => {
      group[input.key] = input.required
        ? new FormControl(input.value || '', Validators.required)
        : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}
