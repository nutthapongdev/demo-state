// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'demo-state';
// }


import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <a [routerLink]="['/parent']">Parent</a> | <a [routerLink]="['/child']">Child</a>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}