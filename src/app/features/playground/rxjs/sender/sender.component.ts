import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-sender',
  template: `
    <h3>Sender Component</h3>

    <input class="form-control mb-2" #msg placeholder="Enter message" />
    <button class="btn btn-primary me-2" (click)="send(msg.value)">Send Message</button>

    <button class="btn btn-success" (click)="setOnline()">Set Online</button>
  `
})
export class SenderComponent {

  constructor(private sharedService: SharedDataService) {}

  send(value: string) {
    this.sharedService.sendMessage(value);
  }

  setOnline() {
    this.sharedService.updateStatus('Online');
  }
}
