import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserPopupComponent } from '../../shared/user-popup/user-popup.component';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UserPopupComponent);
  }
}
