import { Component } from '@angular/core';
import { InfoService } from '../../../services/info.service';

@Component({
  selector: 'app-amigo-vip',
  templateUrl: './amigo-vip.component.html',
  styleUrls: ['./amigo-vip.component.scss'],
})
export class AmigoVipComponent {
  infoService = new InfoService();
}
