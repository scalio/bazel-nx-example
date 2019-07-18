export interface UserModel {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ISignUpDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ISignInDto {
  username: string;
  password: string;
}
