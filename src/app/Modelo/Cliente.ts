import { Cita } from './Cita';
import { Factura } from './Factura';

export class Cliente{
    id!: number;
    dni!:String;
    nombre!:String ;
    apellido1!:String ;
    apellido2!: String ;
    login!:String|undefined;
    telefono!: number | undefined;
   
    email!:String;
    token!:String|undefined;
    validado:boolean|undefined;
    activo:boolean|undefined;
    descuento: number | undefined;
    //cita:Cita = new Cita;
    //factura:Factura= new Factura;


}