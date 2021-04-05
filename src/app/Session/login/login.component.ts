import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Session } from 'src/app/Modelo/Session';
import { Empleado } from 'src/app/Modelo/Empleado';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado: Empleado | null = null;
  constructor(private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) {

    if (!this.activatedRoute.snapshot.data.message) {
      console.log(" no hay session", this.activatedRoute.snapshot.data.message)

    } else {
      console.log(" si hay session", this.activatedRoute.snapshot.data.message)
      this.empleado = this.activatedRoute.snapshot.data.message;
      
      router.navigate(['app-logout'])
    }
  }

  session: Session = new Session;
  

  ngOnInit(): void {
    
  }

  loginEmpleado() {
    let parameter = JSON.stringify(this.session);
    this.service.LogEmpleado(parameter).subscribe(data => this.router.navigate(["app-home"]))

  }

 
}
