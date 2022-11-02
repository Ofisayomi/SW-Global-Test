import { BookCheckDetails } from './check-model';
export class BookModel{
  bookTitle: string;
  bookAuthor: string;
  bookISBN: number;
  revisionNumber: number;
  pubDate: Date;
  publisher: string;
  dateAdded: Date;
  genre: string;
  checkOut: boolean;
  checkDetails?: BookCheckDetails;

  constructor(bookTitle: string, bookAuthor: string, bookISBN: number, revisionNumber: number, pubDate: Date, publisher: string, dateAdded: Date, genre: string, checkDetails?: BookCheckDetails){
    this.bookAuthor = bookAuthor;
    this.bookTitle = bookTitle;
    this.bookISBN = bookISBN;
    this.revisionNumber = revisionNumber;
    this.pubDate = pubDate;
    this.publisher = publisher;
    this.dateAdded = dateAdded;
    this.genre = genre;
    this.checkOut = checkDetails == null? false: true;
    this.checkDetails = checkDetails
  }
}
