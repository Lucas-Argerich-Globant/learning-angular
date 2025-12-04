import { Component, signal } from '@angular/core';
import { UserList } from './user-list/user-list';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const initialValues: User[] = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 34,
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 22,
  },
  {
    firstName: 'Charlie',
    lastName: 'Brown',
    age: 50,
  },
  {
    firstName: 'Diana',
    lastName: 'Prince',
    age: 28,
  },
  {
    firstName: 'Ethan',
    lastName: 'Hunt',
    age: 45,
  },
];

@Component({
  imports: [UserList],
  template: `
    <h1 class="text-lg font-bold m-4">Users Page</h1>
    <section class="flex flex-col items-center gap-4">
      <user-list [users]="users()" />
    </section>
  `,
})
export class Users {
  protected users = signal<User[]>(initialValues);
}
