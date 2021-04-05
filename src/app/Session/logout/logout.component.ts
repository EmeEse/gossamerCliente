import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  empleado: Empleado | null = null;
  constructor(private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (!this.activatedRoute.snapshot.data.message) {
      
      router.navigate(['login'])
    } else {
      
      this.empleado = this.activatedRoute.snapshot.data.message.body;
      
      
    }
   }

  ngOnInit(): void {
  }
  
  logOutEmpleado() {
    this.service.logOutEmpleado().subscribe(data => { this.router.navigate(["login"]) });
  }
}
