import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  VERSION,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { CalendlyService } from '../../../services/calendly.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { FormTextInput } from '../../../classes/helpers/form-text-input';
import { Phone } from '../../../classes/helpers/phone';
import { FormTextArea } from '../../../classes/helpers/form-text-area';
import { tap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

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
  submitting = false;
  submitted = false;

  private submissionForm: AngularFirestoreCollection<unknown>;

  contactForm$: Observable<(FormTextInput | Phone | FormTextArea)[]>;
  constructor(
    private router: Router,
    private calendly: CalendlyService,
    private contactService: ContactService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('contactSubmissions');

    this.contactForm$ = this.contactService.getContact().pipe(
      tap(res => {
        this.form = this.contactService.buildFormGroup(res);
      })
    );

    this.contactService.getContact();
    // @ts-ignore
    Calendly.initInlineWidget({
      url:
        'https://calendly.com/langhausenenterprises/phone-jukebox-repair-service?hide_event_type_details=1&background_color=4d5055&text_color=ffffff&primary_color=ffc107',
      parentElement: this.container.nativeElement
    });
  }

  onSubmit(value: any): void {
    this.submitting = true;
    this.submissionForm
      .add(value)
      .then(res => {
        this.submitted = true;
      })
      .catch(err => console.error(err))
      .finally(() => {
        this.submitting = false;
      });
  }
}
