import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  closeDrawer() {
    document.getElementById('side-drawer')!.style.display = 'none';
  }
}
