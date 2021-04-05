import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Factura } from 'src/app/Modelo/Factura';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent implements OnInit {
  facturas:Factura[]= Array() ;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getFacturas().subscribe(
      data=>{
        this.facturas =data;
      
      }
    )

  }
  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  
  viewFactura(factura:Factura){
    
    localStorage.setItem("id_Factura", factura.id.toString())
    this.router.navigate(["app-view"])
  }


}
