import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaSolicitudComponent } from './carta-solicitud/carta-solicitud.component';
import { CartaOriginalidadComponent } from './carta-originalidad/carta-originalidad.component';
import { CesionDerechosAutorComponent } from './cesion-derechos-autor/cesion-derechos-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaSolicitudComponent,
    CartaOriginalidadComponent,
    CesionDerechosAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
