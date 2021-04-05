import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { ServiceService } from 'src/app/Service/service.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})

export class AddCitaComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2021-03-08' },
      { title: 'event 2', date: '2021-03-07' }
    ]
  };
  handleDateClick(arg: { dateStr: string; }) {
    //alert('date click! ' + arg.dateStr);
    this.router.navigate(['app-update-form']);

  }
  
  
  constructor(private service:ServiceService, private router:Router) {
    
   }
  
  ngOnInit(): void {
  }
  

}
