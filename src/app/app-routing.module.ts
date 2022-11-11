import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
