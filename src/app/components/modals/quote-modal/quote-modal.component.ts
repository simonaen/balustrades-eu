import {Component, HostListener, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
  styleUrls: ['./quote-modal.component.scss']
})
export class QuoteModalComponent implements OnInit {
  faClose = faPlus;

  constructor(public dialogRef: MatDialogRef<QuoteModalComponent>) { }

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
