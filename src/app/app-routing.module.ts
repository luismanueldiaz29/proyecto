import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartaSolicitudComponent } from './carta-solicitud/carta-solicitud.component';
import { CartaOriginalidadComponent } from './carta-originalidad/carta-originalidad.component';
import { CesionDerechosAutorComponent } from './cesion-derechos-autor/cesion-derechos-autor.component';


const routes: Routes = [
  
  {
    path: 'carta_Solicitud',
    component: CartaSolicitudComponent
  },
  {
    path: 'carta_originalidad',
    component: CartaOriginalidadComponent
  },
  {
    path: 'cesion_derechosAutor',
    component: CesionDerechosAutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
