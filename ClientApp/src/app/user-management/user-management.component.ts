import { UserModel, RolesEnum } from './../models/user-model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  modalRef?: BsModalRef;
  editUser?: UserModel;
  constructor(private modalService: BsModalService) {
    // FontAwesomeModule
   }

  ngOnInit(): void {
  }

  users: UserModel[]=[
    new UserModel('Jonathan','Nelson',RolesEnum.Reader, '56352TTEG','jnelson@user.com', '09087876543', true),
    new UserModel('Frank','Edoho',RolesEnum.Reader, '56352TTAG','fedoho@user.com', '07056565432', true),
    new UserModel('Tony','Fash',RolesEnum.Librarian, '56352TTHG','tfash@user.com', '09077654321', true),
    new UserModel('Umar','James',RolesEnum.Reader, '56352TTKG','ujames@user.com', '09077654320', true),
    new UserModel('Stephen','Lionel',RolesEnum.Reader, '56352TTCG','slionel@user.com', '09077654387', true)
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEditUserModal(template: TemplateRef<any>, user: UserModel) {
    this.modalRef = this.modalService.show(template);
    this.editUser = user;
  }
}
