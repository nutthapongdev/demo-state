import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DataService } from '../../servives/data.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, NgFor, ],
  template: `
    <div *ngFor="let m of messages">
      <li>{{ m }}</li>
    </div>
  `,
})
export class ParentComponent {
  messages: string[] = [];

  // constructor(private dataService: DataService) {
  //   this.dataService.messages.subscribe((newMessage) => {
  //     this.messages = newMessage;
  //   });
  // }
  
  /// angular 17 only 
  constructor(private dataService: DataService) {
    this.messages = this.dataService.data().messages;
  }
}