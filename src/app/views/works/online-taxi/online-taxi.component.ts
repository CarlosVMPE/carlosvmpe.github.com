import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-online-taxi',
  templateUrl: './online-taxi.component.html',
  styleUrls: ['./online-taxi.component.scss']
})
export class OnlineTaxiComponent {
  infoService = new InfoService();
}
