import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-footer-works',
  templateUrl: './footer-works.component.html',
  styleUrls: ['./footer-works.component.scss']
})
export class FooterWorksComponent {
  infoService = new InfoService();
}
