import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  GraficasComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent
  ]

})
export class PagesModule { }
