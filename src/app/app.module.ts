import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaSolicitudComponent } from './carta_de_solicitud/carta-solicitud_general/carta-solicitud.component';
import { CartaOriginalidadComponent } from './carta-originalidad/carta-originalidad.component';
import { CesionDerechosAutorComponent } from './cesion-derechos-autor/cesion-derechos-autor.component';
import { InformacionEventoComponent } from './carta_de_solicitud/informacion-evento/informacion-evento.component';
import { AnexosComponent } from './carta_de_solicitud/anexos/anexos.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaSolicitudComponent,
    CartaOriginalidadComponent,
    CesionDerechosAutorComponent,
    InformacionEventoComponent,
    AnexosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
