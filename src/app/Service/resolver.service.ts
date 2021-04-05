import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from '../Modelo/Empleado';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<Empleado|null>>{

  constructor(private service: ServiceService, private router: Router) { }
 
 
  resolve(): Observable<Empleado | null> {
    return this.service.checkEmpleado().pipe(
      catchError(error => {
        console.log('error',error);
        return of(null)
        })
    )
  }
}
