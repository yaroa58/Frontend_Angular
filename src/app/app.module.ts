import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './plantilla/navbar/navbar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { CrearUsuarioComponent } from './modulos/administracion/usuarios/crear-usuario/crear-usuario.component';
import { ConocenosComponent } from './modulos/conocenos/conocenos.component';
import { CrearMascotasComponent } from './modulos/mascotas/crear-mascotas/crear-mascotas.component';
import { AprobacionesComponent } from './modulos/aprobaciones/aprobaciones.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    // CrearUsuarioComponent,
    ConocenosComponent,
    CrearMascotasComponent,
    AprobacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
