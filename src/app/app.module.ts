import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './plantilla/navbar/navbar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { CrearUsuarioComponent } from './administracion/usuarios/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
