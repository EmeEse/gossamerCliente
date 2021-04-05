import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import {Empleado} from 'src/app/Modelo/Empleado'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  empleados:Empleado[] | undefined;
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEmpleados()
    .subscribe(data=>{this.empleados=data;})
  }
  nuevoEmpleado(){
    this.router.navigate(["add"])
  }

  editarEmpleado(empleado:Empleado){
    
    localStorage.setItem("id", empleado.id.toString())
    this.router.navigate(["edit"])
  }
}
