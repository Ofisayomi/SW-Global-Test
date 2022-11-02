import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  login(email:string, password: string){
    console.log(email);
  }

}
