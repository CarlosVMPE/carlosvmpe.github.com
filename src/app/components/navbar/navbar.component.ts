import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      const navLi = document.querySelectorAll('nav ul li');
      window.onscroll = () => {
        let current = '';

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;

          if (pageYOffset >= sectionTop - 60) {
            if (section.getAttribute('id')) {
              current = section.getAttribute('id') || '';
            }
          }
        });

        navLi.forEach((li) => {
          li.classList.remove('active');
          if (li.classList.contains(current)) {
            li.classList.add('active');
          }
        });
      };
    }, 500);
  }
}
