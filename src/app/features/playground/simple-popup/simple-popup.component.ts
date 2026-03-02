import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.css']
})
export class SimplePopupComponent {
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
