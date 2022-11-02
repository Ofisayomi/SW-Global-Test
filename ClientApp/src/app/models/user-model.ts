
export class UserModel{
  firstName: string;
  lastName: string;
  role: RolesEnum;
  id: string;
  email: string;
  phoneNumber: string;
  IsActive: boolean;

  constructor(firstName: string, lastName: string, role: RolesEnum, id: string, email: string, phoneNumber: string, IsActive: boolean){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.id = id;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.IsActive = IsActive;
  }
}

export enum RolesEnum{
  Librarian,
  Reader
}
