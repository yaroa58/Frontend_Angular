import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) {

  }

  Identificar(usuario: string, contrasena: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      contrasena: contrasena
    }, {
      headers: new HttpHeaders({

      })
    })
  }
}
