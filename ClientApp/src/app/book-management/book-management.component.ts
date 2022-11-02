import { BookModel } from './../models/book-model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BookCheckDetails } from '../models/check-model';


@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  faedit = faEdit;
  modalRef?: BsModalRef;
  book?: BookModel;
  filteredBooks: BookModel[]=[];
  public checkOutDetails?: BookCheckDetails;
  constructor(private modalService: BsModalService) {
    // FontAwesomeModule
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

  ngOnInit(): void {
    this.filteredBooks = this.books;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  filterBooks(checked: boolean){
    this.filteredBooks = checked? this.books.filter(x=> x.checkOut == true): this.books;
  }

  openEditModal(template: TemplateRef<any>, bookISBN: number) {
    this.modalRef = this.modalService.show(template);
    this.book = this.books.find(x=> x.bookISBN == bookISBN);
  }

  openCheckOutModal(template: TemplateRef<any>, checkOut?: BookCheckDetails) {
    this.modalRef = this.modalService.show(template);
    this.checkOutDetails = checkOut;
  }

  readURL(input:HTMLInputElement, image: HTMLImageElement) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e: any) {
          image.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
}
