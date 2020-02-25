import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  VERSION,
  Input, EventEmitter, Output
} from '@angular/core';
import { Router } from '@angular/router';
import { CalendlyService } from '../../../services/calendly.service';
import { FormGroup } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { FormTextInput } from '../../../classes/helpers/form-text-input';
import { Phone } from '../../../classes/helpers/phone';
import { FormTextArea } from '../../../classes/helpers/form-text-area';
import { tap } from 'rxjs/operators';

class FormGroupBase<T> {}

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @Input() content: FormGroupBase<any>;

  @Output() emitFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('container', { static: true }) container: ElementRef;
  form: FormGroup;
  payload = '';

  contactForm$: Observable<(FormTextInput | Phone | FormTextArea)[]>;
  constructor(
    private router: Router,
    private calendly: CalendlyService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm$ = this.contactService.getContact().pipe(
      tap(res => {
        this.form = this.contactService.buildFormGroup(res);
      })
    );

    this.contactService.getContact().subscribe(res => console.log('test', res));
    // @ts-ignore
    // Calendly.initInlineWidget({
    //   url:
    //     'https://calendly.com/langhausenenterprises/phone-jukebox-repair-service?hide_event_type_details=1&background_color=4d5055&text_color=ffffff&primary_color=ffc107',
    //   parentElement: this.container.nativeElement
    // });
  }

  onSubmit(event) {
    console.log('emit', event);
    // this.payload = JSON.stringify(this.form.getRawValue());
  }
}
