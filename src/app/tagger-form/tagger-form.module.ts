import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TaggerFormRoutingModule } from './tagger-form-routing.module';
import { TaggerFormComponent } from './tagger-form.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TaggerFormRoutingModule
  ],
  declarations: [
    TaggerFormComponent
  ]
})
export class TaggerFormModule { }
