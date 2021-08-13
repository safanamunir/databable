import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardatatable';
  public data = [
    {name: 'test1', email: 'test@gmail.com', website:'test.com'},
    {name: 'test2', email: 'test@gmail.com', website:'test.com'},
    {name: 'test3', email: 'test@gmail.com', website:'test.com'},
    {name: 'test4', email: 'test@gmail.com', website:'test.com'},
    {name: 'test5', email: 'test@gmail.com', website:'test.com'},
    {name: 'test6', email: 'test@gmail.com', website:'test.com'},
    {name: 'test7', email: 'test@gmail.com', website:'test.com'},
    {name: 'test8', email: 'test@gmail.com', website:'test.com'},
    {name: 'test12', email: 'test@gmail.com', website:'test.com'},
    {name: 'test9', email: 'test@gmail.com', website:'test.com'},
    {name: 'test10', email: 'test@gmail.com', website:'test.com'},
    {name: 'test11', email: 'test@gmail.com', website:'test.com'},
];
  
  dtOptions: any = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      autoWidth: false,
      pageLength: 10,
     // lengthMenu: [5, 10, 15, 20],
      processing: true,
     dom: 'Bfrtip',  
      buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
}
}
