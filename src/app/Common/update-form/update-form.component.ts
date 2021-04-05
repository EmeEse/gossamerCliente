
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  cita:Cita = new Cita;
  formularioCita: FormGroup;
  constructor(private service:ServiceService, private router:Router, private formBuilder: FormBuilder) {
    this.formularioCita = this.formBuilder.group({
      fecha:['', Validators.required],
      id_cliente:['', Validators.required],
      id_empleado:['', Validators.required],
      id_local:['', Validators.required],
      id_hacer:['',Validators.required],
      terminado:['', Validators.required],
      id_factura:['', Validators.required],

        })
   }

  ngOnInit(): void {
  }
  crearCita(){
    let parameter = JSON.stringify(this.formularioCita.value);
    this.service.addCita(parameter).subscribe((data)=>{alert('Cita creada con exitao'); this.router.navigate(['listarCita']);})
  }
}
