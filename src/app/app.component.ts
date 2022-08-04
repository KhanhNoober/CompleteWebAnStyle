import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-simple-web-routing';
  items = [
    { title: 'Home',icon: 'home' ,link: '/home' },
    { title: 'Produces',icon: 'list' ,link: '/produces' },
    { title: 'About Us',icon: 'info' ,link: '/about' },
    { title: 'Contact',icon: 'phone' ,link: '/contact' },
  ];
}
