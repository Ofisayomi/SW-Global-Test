import { RolesEnum, UserModel } from './models/user-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userModel: UserModel;
  constructor() {
    this.userModel = new UserModel('Administrator', 'user', RolesEnum.Librarian, 'ABCD1234', 'admin@swglobal.com', '08080808080', true);
  }
}
