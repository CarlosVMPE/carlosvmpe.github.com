import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-taxi-pacifico',
  templateUrl: './taxi-pacifico.component.html',
  styleUrls: ['./taxi-pacifico.component.scss']
})
export class TaxiPacificoComponent {
  infoService = new InfoService();
}
