import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(35)]
    ),
    Email: new FormControl('', [
      Validators.required, Validators.email]
    ),
    Message: new FormControl('', [
      Validators.required, Validators.minLength(4)]
    )
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.revert();
  }

  revert() {
    this.contactForm.reset();
  }

  get name() {
    return this.contactForm.get('Name');
  }

  get email() {
    return this.contactForm.get('Email');
  }

  get message() {
    return this.contactForm.get('Message');
  }

}
