import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-excel-travel',
  templateUrl: './excel-travel.component.html',
  styleUrls: ['./excel-travel.component.scss']
})
export class ExcelTravelComponent {
  infoService = new InfoService();
}
