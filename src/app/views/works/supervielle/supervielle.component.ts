import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-supervielle',
  templateUrl: './supervielle.component.html',
  styleUrls: ['./supervielle.component.scss']
})
export class SupervielleComponent {
  infoService = new InfoService();
}
