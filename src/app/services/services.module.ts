import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
