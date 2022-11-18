import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "editar-plan/:id",
    component: EditarPlanComponent
  },
  {
    path: "listar-plan",
    component: BuscarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
