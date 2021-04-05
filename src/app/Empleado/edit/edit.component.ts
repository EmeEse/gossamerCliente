import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empleado:Empleado = new Empleado;
  constructor(private service:ServiceService, private router:Router) { }
  
  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEmpleadoId(id).subscribe(data=>this.empleado=data);
  }
  updateEmpleado(){
    let id=localStorage.getItem("id");
    let parameter = JSON.stringify(this.empleado);
    this.service.updateEmpleado(parameter, id).subscribe(data=>{console.log(data); this.router.navigate(["listar"])} )
    
  }

  deleteEmpleado(){
    let id=localStorage.getItem("id");
    this.service.deleteEmpleado(id).subscribe(data=>console.log(data))
  }
}
