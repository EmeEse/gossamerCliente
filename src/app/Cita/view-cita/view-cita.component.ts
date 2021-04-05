import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { ServiceService } from 'src/app/Service/service.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-view-cita',
  templateUrl: './view-cita.component.html',
  styleUrls: ['./view-cita.component.css']
})
export class ViewCitaComponent implements OnInit {
  cita:Cita = new Cita;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.view();
  }
  view(){
    let id=localStorage.getItem("id_Cita");
    this.service.getCitaId(id).subscribe((data)=>{this.cita=data;console.log(this.cita)});
    
  }

  imprimirCita(){
    var doc: jsPDF = new jsPDF();
   
    doc.setFontSize(30); 
    doc.text("Factura", 80, 15);
    doc.setFontSize(11);
    doc.text("Fecha: ", 10, 25);     
    doc.text(this.cita.factura.fecha.toString(), 25, 25);
    doc.text("Cliente: ", 10, 35);
    doc.text(this.cita.cliente.nombre.toString(), 25, 35);
    doc.text(this.cita.cliente.apellido1.toString(), 40, 35);
    doc.text(this.cita.cliente.apellido2.toString(), 60, 35);
    doc.text("DNI/NIE: ", 10, 45);
    doc.text(this.cita.cliente.dni.toString(), 30, 45);
    doc.text("Email :", 10, 55);
    doc.text(this.cita.cliente.email.toString(), 25, 55);
    
    doc.text("Nombre", 10, 70);
    doc.text("Precio", 110, 70);
    doc.text("Cantidad", 130, 70);
    doc.text( "Subtotal", 150, 70);
    /*
    let subtotal = 0;
    let y;
    for (let i = 0; i < $scope.compraEntities.length; i++) {
        const element = $scope.compraEntities[i];
        y = i * 10;
        subtotal += element.cantidad * element.producto.precio;
        doc.line(10, 75 + y, 200, 75 + y)
        doc.text(element.producto.nombre, 10, 80 + y);
        doc.line(10, 75 + y, 200, 75 + y)
        doc.text(element.producto.precio.toString(), 110, 80 + y);
        doc.line(10, 75 + y, 200, 75 + y)
        doc.text(element.cantidad.toString(), 130, 80 + y);
        doc.line(10, 75 + y, 200, 75 + y)
        doc.text(((element.cantidad * element.producto.precio).toFixed(2)).toString(), 150, 80 + y);
        doc.line(10, 75 + y, 200, 75 + y)

    }
    doc.line(90, 65+y, 180, 65+y)
    doc.text("Total a pagar", 110, 90+y);
    doc.text(subtotal.toFixed(2).toString(), 150, 90+y);

   
    */
    doc.save('Factura' + Math.floor(Math.random() * 100000))
  }

}
