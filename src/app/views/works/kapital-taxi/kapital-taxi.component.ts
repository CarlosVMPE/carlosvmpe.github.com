import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-kapital-taxi',
  templateUrl: './kapital-taxi.component.html',
  styleUrls: ['./kapital-taxi.component.scss']
})
export class KapitalTaxiComponent {
  infoService = new InfoService();
}
