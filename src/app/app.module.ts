import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';//Calendar
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { ListarComponent } from './Empleado/listar/listar.component';
import { AddComponent } from './Empleado/add/add.component';
import { EditComponent } from './Empleado/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ServiceService } from '../app/Service/service.service'
import { HttpClientModule } from '@angular/common/http';
import { ListarCitaComponent } from './Cita/listar-cita/listar-cita.component';
import { AddCitaComponent } from './Cita/add-cita/add-cita.component';
import { EditCitaComponent } from './Cita/edit-cita/edit-cita.component';
import { ListarTrabajoComponent } from './Trabajo/listar-trabajo/listar-trabajo.component';
import { EditTrabajoComponent } from './Trabajo/edit-trabajo/edit-trabajo.component';
import { AddTrabajoComponent } from './Trabajo/add-trabajo/add-trabajo.component';
import { LoginComponent } from './Session/login/login.component';
import { ListarFacturaComponent } from './Factura/listar-factura/listar-factura.component';
import { AddFacturaComponent } from './Factura/add-factura/add-factura.component';
import { MenuComponent } from './menu/menu.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PaginatePipe } from './Pipes/paginator.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ViewComponent } from './Factura/view/view.component';
import { ViewCitaComponent } from './Cita/view-cita/view-cita.component';
import { ViewTrabajoComponent } from './Trabajo/view-trabajo/view-trabajo.component';
import { LogoutComponent } from './Session/logout/logout.component';
import { HomeComponent } from './Common/home/home.component';
import { ErrWindwComponent } from './Common/err-windw/err-windw.component';
import { UpdateFormComponent } from './Common/update-form/update-form.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarCitaComponent,
    AddCitaComponent,
    EditCitaComponent,
    ListarTrabajoComponent,
    EditTrabajoComponent,
    AddTrabajoComponent,
    LoginComponent,
    ListarFacturaComponent,
    AddFacturaComponent,
    MenuComponent,
    PaginatePipe,
    ViewComponent,
    ViewCitaComponent,
    ViewTrabajoComponent,
    LogoutComponent,
    HomeComponent,
    ErrWindwComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    FullCalendarModule,


  ],
  providers: [ServiceService, {
    provide: MatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
