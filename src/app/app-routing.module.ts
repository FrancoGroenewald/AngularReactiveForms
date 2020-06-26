import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JqueryTableComponent } from './jquery-table/jquery-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { CombinationComponent } from './combination/combination.component';
import { FormDatatableComponent } from './form-datatable/form-datatable.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jquery-table', component: JqueryTableComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: 'combination', component: CombinationComponent},
  { path: 'form-datatable', component: FormDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
