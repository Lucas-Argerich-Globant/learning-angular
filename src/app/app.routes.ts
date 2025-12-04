import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { ComputedNames } from './computed-names/computed-names';
import { Users } from './users/users';
import { Forms } from './forms/forms';

export const routes: Routes = [
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'computed-names',
    component: ComputedNames
  },
  {
    path: 'users',
    component: Users
  },
  {
    path: 'forms',
    component: Forms
  }
];
