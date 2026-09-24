import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes')
  },
  {
    path: 'works',
    loadChildren: () => import('./features/works/works.routes')
  },
  { path: '**', redirectTo: '' },
];
