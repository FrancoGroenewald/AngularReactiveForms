import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject, Observable, Subscription } from 'rxjs'; 
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-jquery-table',
  templateUrl: './jquery-table.component.html',
  styleUrls: ['./jquery-table.component.css']
})
export class JqueryTableComponent implements OnInit {
  dataTable: any;
  data: any;
  view = false;
  constructor(private api: ApiService, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.api.getData()
    .subscribe(response => {
      this.view = true;
      this.data = response;
      this.chRef.detectChanges();
      const table: any = $('example');
      this.dataTable = table.DataTable({
        responsive: true,
        select: true
      });
    });
  }
}
