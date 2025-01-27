import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-triptico',
  templateUrl: './triptico.component.html',
  styleUrls: ['./triptico.component.scss']
})
export class TripticoComponent {
  infoService = new InfoService();
}
