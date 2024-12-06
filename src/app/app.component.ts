import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-management-site';

  constructor(private router: Router) {
    // Subscribe to router events for debugging
    this.router.events.subscribe((event: Event) => {
      console.log('Router Event:', event);
    });
  }
}
