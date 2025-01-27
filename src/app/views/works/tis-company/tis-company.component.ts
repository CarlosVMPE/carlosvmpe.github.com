import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-tis-company',
  templateUrl: './tis-company.component.html',
  styleUrls: ['./tis-company.component.scss']
})
export class TisCompanyComponent {
  infoService = new InfoService();
}
