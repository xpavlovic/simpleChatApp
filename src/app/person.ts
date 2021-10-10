export interface People {
  [id: number]: Person;
}

export interface Person {
  name: string;
  message: Array<string>;
}
