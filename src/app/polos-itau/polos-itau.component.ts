import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, tap, Observable } from 'rxjs';
import { IBusiness } from './models/IBusiness';
import { PolosItauService } from './polos-itau.service';

@Component({
  selector: 'app-polos-itau',
  templateUrl: './polos-itau.component.html',
  styleUrls: ['./polos-itau.component.scss']
})
export class PolosItauComponent implements OnInit {

  campoPesquisar = new FormControl();

  listaPolos$!: Observable<IBusiness[]>;
  displayedColumns = ['name', 'business', 'valuation', 'active', 'id'];
  dataSource = new MatTableDataSource<IBusiness>()
  @ViewChild(MatPaginator) paginator! : MatPaginator;


  constructor(
      private polosItauService: PolosItauService,
      ) { }

  ngOnInit(): void {

    this.listaPolos$ = this.polosItauService.getPolos()
    this.listaPolos$.subscribe(res => {
      this.dataSource = new MatTableDataSource<IBusiness>(res);
      this.dataSource.paginator = this.paginator;

      this.campoPesquisar.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(value => this.applyFilter(value)),
      ).subscribe()
    });
  }


  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }






}
