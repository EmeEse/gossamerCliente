import { Cliente } from './Cliente';
import { Empleado } from './Empleado';
import { Factura } from './Factura';
import { Hacer } from './Hacer';

export class Cita{
    id!:number;
    fecha: Date| undefined;
    empleado: Empleado = new Empleado;
    cliente: Cliente = new Cliente;
    factura : Factura = new Factura;
    hacer:Hacer=new Hacer;
    tareas:Hacer[]= new Array();
}