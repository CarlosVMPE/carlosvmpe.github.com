import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervielleComponent } from './supervielle/supervielle.component';
import { YapeComponent } from './yape/yape.component';
import { MovistarComponent } from './movistar/movistar.component';
import { TaxiLimaComponent } from './taxi-lima/taxi-lima.component';
import { KapitalTaxiComponent } from './kapital-taxi/kapital-taxi.component';
import { ExcelTravelComponent } from './excel-travel/excel-travel.component';
import { OnlineTaxiComponent } from './online-taxi/online-taxi.component';
import { TaxiPacificoComponent } from './taxi-pacifico/taxi-pacifico.component';
import { AmigoVipComponent } from './amigo-vip/amigo-vip.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TripticoComponent } from './triptico/triptico.component';
import { TisCompanyComponent } from './tis-company/tis-company.component';

const routes: Routes = [
  { path: '', component: SupervielleComponent },
  { path: 'supervielle', component: SupervielleComponent },
  { path: 'yape', component: YapeComponent },
  { path: 'movistar', component: MovistarComponent },
  { path: 'taxilima', component: TaxiLimaComponent },
  { path: 'kapitaltaxi', component: KapitalTaxiComponent },
  { path: 'exceltravel', component: ExcelTravelComponent },
  { path: 'onlinetaxi', component: OnlineTaxiComponent },
  { path: 'taxipacifico', component: TaxiPacificoComponent },
  { path: 'amigovip', component: AmigoVipComponent },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'triptico', component: TripticoComponent },
  { path: 'tiscompany', component: TisCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
