import { Component, OnInit } from "@angular/core";
import { Customer } from "../dataService/customer";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"]
})
export class CustomerListComponent implements OnInit {
  public loading = true;

  displayedColumns = ["id", "name", "job", "operations"];

  customers: Customer[] = [
    { id: 1, name: "Customer 001", job: "Programmer" },
    { id: 2, name: "Customer 002", job: "Software Engineer" },
    { id: 3, name: "Customer 003", job: "Software Analyst" },
    { id: 4, name: "Customer 004", job: "Software Auditor" },
    { id: 5, name: "Customer 005", job: "Software Tester" }
  ];

  dataSource = new MatTableDataSource<Customer>(this.customers);

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    //console.log("this is the one " + JSON.stringify(this.dataSource));
    // this.dataSource = new MatTableDataSource<Customer>(this.customers);
  }
}
