import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartaSolicitudComponent } from './carta_de_solicitud/carta-solicitud_general/carta-solicitud.component';
import { CartaOriginalidadComponent } from './carta-originalidad/carta-originalidad.component';
import { CesionDerechosAutorComponent } from './cesion-derechos-autor/cesion-derechos-autor.component';
import { InformacionEventoComponent } from './carta_de_solicitud/informacion-evento/informacion-evento.component';
import { AnexosComponent } from './carta_de_solicitud/anexos/anexos.component';


const routes: Routes = [
  {
    path: 'carta_originalidad',
    component: CartaOriginalidadComponent
  },
  {
    path: 'cesion_derechosAutor',
    component: CesionDerechosAutorComponent
  },
  {
    path: 'carta_solicitud_informacion',
    component: InformacionEventoComponent
  },
  {
    path: 'carta_Solicitud_general',
    component: CartaSolicitudComponent
  },
  {
    path: 'carta_solicitud_anexo',
    component: AnexosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
