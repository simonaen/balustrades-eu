import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {ContactForm} from '../../../../models/contact-form.model';

@Component({
  selector: 'app-inquiry-preview',
  templateUrl: './inquiry-preview.component.html',
  styleUrls: ['../quote-modal/quote-modal.component.scss', './inquiry-preview.component.scss']
})
export class InquiryPreviewComponent implements OnInit {
  faClose = faPlus;
  data: ContactForm;
  constructor(
    public dialogRef: MatDialogRef<InquiryPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log(data);
    this.data = data.data;
  }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.closeModal();
  }
}
