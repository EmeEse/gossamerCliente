
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Empleado } from '../Modelo/Empleado';
import { Trabajo } from '../Modelo/Trabajo';
import { Session } from '../Modelo/Session';
import { catchError, map } from 'rxjs/operators';
import { Cita } from '../Modelo/Cita';
import { ActivatedRouteSnapshot, Resolve, RouterOutlet } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Factura } from '../Modelo/Factura';
import {Hacer} from '../Modelo/Hacer';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8082/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  LogEmpleado(session: String) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.post<any>(this.Url + 'employeesession/', session, httpOptions)
  }

  checkEmpleado(): Observable<any> {

    return this.http.get<Empleado>(this.Url + 'employeesession/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    }).pipe(
      catchError(err => {
        console.log('ha ocurrido un error', err);
        return throwError(err);

      })
    )
  }


  logOutEmpleado() {
    return this.http.delete(this.Url + 'employeesession/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    })
  }
  getEmpleados() {

    return this.http.get<Empleado[]>(this.Url + 'employeesession/all');
  }
  //Post
  addEmpleado(empleado: String) {
    return this.http.post<any>(this.Url + 'employeesession/add', empleado, this.httpOptions)
  }
  addTrabajo(trabajo: String) {
    return this.http.post<any>(this.Url + 'trabajo/', trabajo, this.httpOptions)
  }
  addCita(cita: String){
    return this.http.post<any>(this.Url + 'cita/', cita, this.httpOptions)
 
  }

  // Get`s
  getEmpleadoId(id: String | null) {
    return this.http.get<Empleado>(this.Url + 'employeesession/' + id, this.httpOptions)
  }
  getFacturaId(id: String | null) {
    return this.http.get<Factura>(this.Url + 'factura/' + id, this.httpOptions)
  }

  getCitaId(id: String | null) {
    return this.http.get<Cita>(this.Url + 'cita/' + id, this.httpOptions)
  }
  getTrabajoId(id: String | null) {
    return this.http.get<Trabajo>(this.Url + 'trabajo/' + id, this.httpOptions)
  }
  getHacerId(id: String | null){
    return this.http.get<Hacer>(this.Url + 'hacer/' + id, this.httpOptions)
  }
  getTrabajos() {

    return this.http.get<Trabajo[]>(this.Url + 'trabajo/all');

  }

  getCitas() {
    return this.http.get<Cita[]>(this.Url + 'cita/all', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),

      withCredentials: true
    })

  }


  getFacturas() {
    return this.http.get<any>(this.Url + '/factura/all', this.httpOptions)
  }

  updateEmpleado(empleado: String, id: String | null) {
    return this.http.put(this.Url + 'employeesession/' + id, empleado, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    });
  }
  deleteEmpleado(id: String | null) {
    return this.http.delete(this.Url + 'employeesession/' + id, this.httpOptions)
  };


  updateTrabajo(trabajo: String, id: String | null) {
    return this.http.put(this.Url + 'trabajo/' + id, trabajo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    });
  }
  deleteTrabajo(id: String | null) {
    return this.http.delete(this.Url + 'trabajo/' + id, this.httpOptions)
  };


  


}
