import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { TaggerFormComponent } from './tagger-form.component';

const routes: Routes = Route.withShell([
  { path: 'tagger-form', component: TaggerFormComponent, data: { title: extract('Services') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TaggerFormRoutingModule { }
