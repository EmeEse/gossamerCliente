import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../Modelo/Empleado';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  empleado: Empleado | null = null;
  constructor(private router:Router,private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    
  }
  Home(){
    this.router.navigate(["app-home"]);
  }
  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  NuevaCita(){
    this.router.navigate(["addCita"])
  }
  ListarTrabajo(){
    this.router.navigate(["listarTrabajo"])
  }

  ListarCita(){
    this.router.navigate(["listarCita"])
  }
  Login(){
    this.router.navigate(["login"])
  }
  listarFactura(){
    this.router.navigate(["listarFactura"])
  }
  Logout(){
    this.router.navigate(["app-logout"])
  }
  
}
