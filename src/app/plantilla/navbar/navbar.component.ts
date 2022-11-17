import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription()


  constructor(private seguridadservicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadservicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      if (datos) {
        this.seInicioSesion = true;
      } else {
        this.seInicioSesion = false;
      }
    })
  }

}
