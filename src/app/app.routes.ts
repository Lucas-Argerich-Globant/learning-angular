import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { ComputedNames } from './computed-names/computed-names';

export const routes: Routes = [
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'computed-names',
    component: ComputedNames
  }
];
