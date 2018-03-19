import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ServicesComponent } from './services.component';

const routes: Routes = Route.withShell([
  { path: 'pricing', component: ServicesComponent, data: { title: extract('Services') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRoutingModule { }
