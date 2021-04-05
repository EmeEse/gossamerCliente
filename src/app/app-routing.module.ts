import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCitaComponent } from './Cita/add-cita/add-cita.component';
import { EditCitaComponent } from './Cita/edit-cita/edit-cita.component';
import { ListarCitaComponent } from './Cita/listar-cita/listar-cita.component';
import { AddComponent } from './Empleado/add/add.component';
import { EditComponent } from './Empleado/edit/edit.component';
import { ListarComponent } from './Empleado/listar/listar.component';
import { LoginComponent } from './Session/login/login.component';
import { EditTrabajoComponent } from './Trabajo/edit-trabajo/edit-trabajo.component';
import { ListarTrabajoComponent } from './Trabajo/listar-trabajo/listar-trabajo.component';
import { ResolverService } from '../app/Service/resolver.service';
import { ListarFacturaComponent } from './Factura/listar-factura/listar-factura.component';
import { ViewComponent } from './Factura/view/view.component';
import { ViewCitaComponent } from './Cita/view-cita/view-cita.component';
import { AddTrabajoComponent } from './Trabajo/add-trabajo/add-trabajo.component';
import { LogoutComponent } from './Session/logout/logout.component';
import { ViewTrabajoComponent } from './Trabajo/view-trabajo/view-trabajo.component';
import { HomeComponent } from './Common/home/home.component';
import { ErrWindwComponent } from './Common/err-windw/err-windw.component';
import { UpdateFormComponent } from "./Common/update-form/update-form.component";

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'listarCita', component: ListarCitaComponent },
  { path: 'editCita', component: EditCitaComponent },
  { path: 'addCita', component: AddCitaComponent },
  { path: 'app-update-form', component: UpdateFormComponent},
  { path: 'listarTrabajo', component: ListarTrabajoComponent },
  { path: 'editTrabajo', component: EditTrabajoComponent },
  { path: 'login', component: LoginComponent, resolve: { message: ResolverService } },
  { path: 'listarFactura', component: ListarFacturaComponent, resolve: { message: ResolverService } },
  { path: 'app-view', component: ViewComponent },
  { path: 'app-view-cita', component: ViewCitaComponent },
  { path: 'app-add-trabajo', component: AddTrabajoComponent,resolve: { message: ResolverService }  },
  { path: 'app-logout', component: LogoutComponent, resolve: { message: ResolverService } },
  { path: 'app-err-windw', component: ErrWindwComponent },
  { path: 'app-view-trabajo', component: ViewTrabajoComponent, resolve: { message: ResolverService } },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
