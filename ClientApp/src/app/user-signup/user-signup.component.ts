import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookCheckDetails } from '../models/check-model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public books: BookModel[]=[
    new BookModel('A Game of Thrones', 'George R. R Martin', 56356356250, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy'),
    new BookModel('A Clash of Kings', 'George R. R Martin', 56356356251, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy',
              new BookCheckDetails('Martin Fowler', '08099087652', this.getDate(-5),this.getDate(5), 5)),
    new BookModel('A Storm of Swords', 'George R. R Martin', 56356356252, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy'),
    new BookModel('A Feast for Crows', 'George R. R Martin', 56356356253, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy'),
    new BookModel('A Dance with Dragons', 'George R. R Martin', 56356356254, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy',
              new BookCheckDetails('Bill Gates', '07067654542', this.getDate(-7),this.getDate(6), 6)),
    new BookModel('The Winds Winter', 'George R. R Martin', 56356356255, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy'),
    new BookModel('A Dream of Spring', 'George R. R Martin', 56356356256, 1.0, new Date(),'Jakes Books', new Date(), 'Fantasy'),
    new BookModel('Da Vinci Code', 'Dan Brown', 56356356786, 1.0, new Date(),'Tony Publisher', new Date(), 'Crime'),
    new BookModel('The Lost Symbol', 'Dan Brown', 56356356000, 1.0, new Date(),'Tony Publisher', new Date(), 'History',
              new BookCheckDetails('Tony Jones', '09088998876', this.getDate(-20),this.getDate(5), 5)),
  ];

  getDate(daysToAdd: number){
    var someDate = new Date();
    return new Date(someDate.setDate(someDate.getDate() + daysToAdd));
  }

}
