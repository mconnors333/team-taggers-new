import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';
import { LoginModule } from './login/login.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TaggerFormModule } from './tagger-form/tagger-form.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    ContactModule,
    LoginModule,
    TaggerFormModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
