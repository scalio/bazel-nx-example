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

export interface SignedUser {
  username: string;
  firstName: string;
  lastName: string;
  expiresIn: number;
  token: string;
}
