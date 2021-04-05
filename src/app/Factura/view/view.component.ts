import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Modelo/Factura';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  factura:Factura = new Factura;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.view()
  }
  view(){
    let id=localStorage.getItem("id_Factura");
    this.service.getFacturaId(id).subscribe(data=>this.factura=data);
  }
}
