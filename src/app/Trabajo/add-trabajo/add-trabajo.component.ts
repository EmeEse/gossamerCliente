import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-trabajo',
  templateUrl: './add-trabajo.component.html',
  styleUrls: ['./add-trabajo.component.css']
})
export class AddTrabajoComponent implements OnInit {
  //trabajo:Trabajo;
  empleado:Empleado | null = null;
  formularioTrabajo: FormGroup;
  constructor(private service:ServiceService, private router:Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { 
    
    this.formularioTrabajo = this.formBuilder.group({
     
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      descripcion: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])], 
      precio: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],  
      descuento: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],   
        });
        if (!this.activatedRoute.snapshot.data.message) {
          console.log(" no hay session", this.activatedRoute.snapshot.data.message)
          router.navigate(['app-err-windw'])
        } else {
          console.log(" si hay session", this.activatedRoute.snapshot.data.message)
          this.empleado = this.activatedRoute.snapshot.data.message;
          
         
        }
  }

  ngOnInit(): void {
  }
  addTrabajo(){
    let parameter = JSON.stringify(this.formularioTrabajo.value);
    this.service.addTrabajo(parameter).subscribe((data)=>{this.router.navigate(['app-listar-trabajo'])}, (err)=>{this.router.navigate(['app-err-windw'])});
    
    
  }
}
