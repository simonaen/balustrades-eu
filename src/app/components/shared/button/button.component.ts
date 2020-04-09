import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {QuoteModalComponent} from '../../modals/quote-modal/quote-modal.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  transparent: boolean;

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  scrollTo() {
    const elmnt = document.getElementById('contact');
    elmnt.scrollIntoView();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '750';
    dialogConfig.width = '900px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(QuoteModalComponent, dialogConfig);
  }

}
