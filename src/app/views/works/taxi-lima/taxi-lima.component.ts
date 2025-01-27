import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-taxi-lima',
  templateUrl: './taxi-lima.component.html',
  styleUrls: ['./taxi-lima.component.scss']
})
export class TaxiLimaComponent {
  infoService = new InfoService();
}
