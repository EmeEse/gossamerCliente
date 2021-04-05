import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view-trabajo',
  templateUrl: './view-trabajo.component.html',
  styleUrls: ['./view-trabajo.component.css']
})
export class ViewTrabajoComponent implements OnInit {
  trabajo:Trabajo = new Trabajo;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.view()
  }
  view(){
    let id=localStorage.getItem("id_Trabajo");
    this.service.getTrabajoId(id).subscribe(data=>this.trabajo=data);
  }
  updateTrabajo(){
    let id=localStorage.getItem("id_Trabajo");
    let parameter = JSON.stringify(this.trabajo);
    this.service.updateTrabajo(parameter, id).subscribe((data)=>{ this.router.navigate(["app-listar-trabajo"])} )
    
  }

  deleteTrabajo(){
    let id=localStorage.getItem("id_Trabajo");
    this.service.deleteTrabajo(id).subscribe((data)=>{ this.router.navigate(["app-listar-trabajo"])})
  }
}
