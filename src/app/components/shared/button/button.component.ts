import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {QuoteModalComponent} from '../../modals/quote-modal/quote-modal.component';
import {absoluteFrom} from '@angular/compiler-cli/src/ngtsc/file_system';

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
