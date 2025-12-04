import { Component, input } from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'user-list',
  template: `
    <table>
      <thead>
        <th class="py-2 pr-2">First Name</th>
        <th class="py-2 pr-2">Last Name</th>
        <th class="py-2 pr-2">Age</th>
      </thead>
      <tbody>
        @for (user of users(); track $index) {
        <tr>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
        </tr>
        }
      </tbody>
    </table>
  `,
})
export class UserList {
  users = input.required<User[]>();
}
