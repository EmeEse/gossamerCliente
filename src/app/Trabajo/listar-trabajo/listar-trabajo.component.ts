import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import {Trabajo} from 'src/app/Modelo/Trabajo';
@Component({
  selector: 'app-listar-trabajo',
  templateUrl: './listar-trabajo.component.html',
  styleUrls: ['./listar-trabajo.component.css']
})
export class ListarTrabajoComponent implements OnInit {
  trabajos:Trabajo[]|undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  this.service.getTrabajos().subscribe(data=>{this.trabajos=data;})

  }
  viewTrabajo(trabajo:Trabajo){
    
    localStorage.setItem("id_Trabajo", trabajo.id.toString())
    this.router.navigate(["app-view-trabajo"])
  }

  addTrabajo(){
    this.router.navigate(["app-add-trabajo"])
  }
}
