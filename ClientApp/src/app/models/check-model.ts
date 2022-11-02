export class BookCheckDetails{
  readerName: string;
  readerPhoneNumber: string;
  checkedOutDate: Date;
  expectedCheckInDate: Date;
  daysRemaining: number;

  constructor(readerName: string, readerPhoneNumber: string, checkedOutDate: Date, expectedCheckInDate: Date, daysRemaining:number){
    this.readerName = readerName;
    this.readerPhoneNumber = readerPhoneNumber;
    this.checkedOutDate = checkedOutDate;
    this.expectedCheckInDate = expectedCheckInDate;
    this.daysRemaining = daysRemaining;
  }
}
