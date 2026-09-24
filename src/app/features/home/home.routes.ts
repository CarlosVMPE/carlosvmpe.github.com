import { Routes } from '@angular/router';
import { HomeLayout } from './layout/home/home-layout.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: HomeLayout
      },
    ]
  }
];

export default homeRoutes;
