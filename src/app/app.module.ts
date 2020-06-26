import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JqueryTableComponent } from './jquery-table/jquery-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { CombinationComponent } from './combination/combination.component';
import { FormDatatableComponent } from './form-datatable/form-datatable.component'

@NgModule({
  declarations: [
    AppComponent,
    JqueryTableComponent,
    DashboardComponent,
    FormArrayComponent,
    FormGroupComponent,
    CombinationComponent,
    FormDatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
