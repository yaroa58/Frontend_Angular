import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //renderizar componentes mediante objetos
  {
    path: ' ',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },

  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./modulos/administracion/administracion.module').then(x => x.AdministracionModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./modulos/pedidos/pedidos.module').then(x => x.PedidosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
