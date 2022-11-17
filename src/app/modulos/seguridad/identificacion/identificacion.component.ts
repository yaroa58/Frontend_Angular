import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    "usuario": ["", [Validators.required, Validators.email]],
    "contrasena": ["", [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  identificarUsusario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario, contrasenaCifrada).subscribe((datos: any) => {
      //ok
      alert('Datos Correctos')
    }, (error: any) => {
      alert('Datos inválidos')
    })
  }

}
