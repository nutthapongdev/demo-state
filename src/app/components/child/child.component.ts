import { CommonModule, NgFor } from "@angular/common";
import { Component} from "@angular/core";
import { DataService } from "@app/servives/data.service";


@Component({
  selector: "app-child",
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <input type="text" #data />
    <button (click)="addNewMessage(data.value); data.value = ''">Update</button>
  `,
})
export class ChildComponent {
  constructor(private dataService: DataService) {}
  
  addNewMessage(newMessage: string) {
    this.dataService.addNewMessage(newMessage);
  }
}