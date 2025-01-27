import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-movistar',
  templateUrl: './movistar.component.html',
  styleUrls: ['./movistar.component.scss']
})
export class MovistarComponent {
  infoService = new InfoService();
}
