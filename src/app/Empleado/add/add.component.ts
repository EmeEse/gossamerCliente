import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empleado:Empleado = new Empleado;
  formularioEmpleado : FormGroup;
  constructor(private service:ServiceService, private router:Router, private formBuilder: FormBuilder) {
    this.formularioEmpleado = this.formBuilder.group({
      dni:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      apellido1:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      apellido2:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      login:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      telefono:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      token:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      validado:['', Validators.required],
      activo:['',Validators.required],
        })
   }

  ngOnInit(): void {
  }
  creaEmpleado(){
    let parameter = JSON.stringify(this.formularioEmpleado.value);
    this.service.addEmpleado(parameter).subscribe(data=>alert('el empleado'+ data.nombre + ' ' + data.apellido1 +' fue creado'));
    this.router.navigate(['listar']);
    
  }

}
