import { CatModel } from '@lazy/api-interface';

export class Cat implements CatModel {
  id: number;
  name: string;
  age: number;
}
