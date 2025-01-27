import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-yape',
  templateUrl: './yape.component.html',
  styleUrls: ['./yape.component.scss']
})
export class YapeComponent {
  infoService = new InfoService();
}
