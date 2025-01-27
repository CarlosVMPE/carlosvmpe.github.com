import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor() {
    setTimeout(() => {
      new Swiper('.mySwiperTech', {
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        },
      });
    }, 500);
  }
}
