import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss']
})
export class UserPopupComponent {
  constructor(private route: Router){

  }

}
