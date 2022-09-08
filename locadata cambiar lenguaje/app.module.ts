import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app

import localeEs from '@angular/common/locales/es-CL';
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  exports:[
    
  ],
  providers: [{provide:LOCALE_ID, useValue:'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
