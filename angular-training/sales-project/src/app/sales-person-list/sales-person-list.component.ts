import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create an array of salesperson objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anupkumar@abcd.com", 50000),
    new SalesPerson("John", "Kumar", "johnkumar@abcd.com", 60000),
    new SalesPerson("Clarie", "Kumar", "clariekumar@abcd.com", 70000),
    new SalesPerson("Mai", "Kumar", "maikumar@abcd.com", 80000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
