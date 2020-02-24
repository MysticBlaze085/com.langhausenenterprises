import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../classes/contact.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}

