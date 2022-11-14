import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';
import { AprobacionesComponent } from './modulos/aprobaciones/aprobaciones.component';
import { ConocenosComponent } from './modulos/conocenos/conocenos.component';
import { CrearMascotasComponent } from './modulos/mascotas/crear-mascotas/crear-mascotas.component';
import { MascotasComponent } from './modulos/mascotas/mascotas.component';
import { IdentificacionComponent } from './modulos/seguridad/identificacion/identificacion.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  //renderizar componentes mediante objetos
  {
    path: ' ',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'identificacion',
    component: IdentificacionComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'conocenos',
    component: ConocenosComponent
  },
  {
    path: 'mascotas',
    component: MascotasComponent
  },
  {
    path: 'crear-mascotas',
    component: CrearMascotasComponent
  },
  {
    path: 'aprobaciones',
    component: AprobacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
