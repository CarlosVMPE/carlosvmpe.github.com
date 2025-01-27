import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
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
import { FooterWorksComponent } from './footer-works/footer-works.component';

@NgModule({
  declarations: [
    WorksComponent,
    SupervielleComponent,
    YapeComponent,
    MovistarComponent,
    TaxiLimaComponent,
    KapitalTaxiComponent,
    ExcelTravelComponent,
    OnlineTaxiComponent,
    TaxiPacificoComponent,
    AmigoVipComponent,
    TarjetaComponent,
    TripticoComponent,
    TisCompanyComponent,
    FooterWorksComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WorksModule {}
