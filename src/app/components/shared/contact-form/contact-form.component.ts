import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {QuoteModalComponent} from '../quote-modal/quote-modal.component';
import {InquiryPreviewComponent} from '../inquiry-preview/inquiry-preview.component';
import {ContactForm} from '../../../../models/contact-form.model';
import set = Reflect.set;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(35)]
    ),
    email: new FormControl('', [
      Validators.required, Validators.email]
    ),
    message: new FormControl('', [
      Validators.required, Validators.minLength(4)]
    )
  });

  @Output()
  submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  onSubmit(data: ContactForm) {
    this.submitted.emit(true);
    this.openModal(data);
  }

  openModal(data: ContactForm) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.id = 'inquiry';
    dialogConfig.height = '750';
    dialogConfig.width = '900px';
    dialogConfig.data = {
      data
    };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(InquiryPreviewComponent, dialogConfig);
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
