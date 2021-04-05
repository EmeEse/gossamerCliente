import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cita } from 'src/app/Modelo/Cita';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  citas : Cita[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {

      this.service.getCitas()
    .subscribe(data=>{this.citas=data;})
  }

  
  verCita(cita:Cita){
    localStorage.setItem("id_Cita", cita.id.toString())
    this.router.navigate(["app-view-cita"])
  }
}
