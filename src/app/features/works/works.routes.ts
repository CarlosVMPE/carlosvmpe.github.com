import { Routes } from '@angular/router';
import { WorksLayout } from './layout/works-layout/works-layout';
import { WorksList } from './pages/works-list/works-list';
import { WorkDetail } from './pages/work-detail/work-detail';


export const worksRoutes: Routes = [
  {
    path: '',
    component: WorksLayout,
    children: [
      /* {
        path: '',
        component: WorksList,
      }, */
      {
        path: ':id',
        component: WorkDetail,
      },
      { path: '**', redirectTo: '/works/dsg' },
    ],
  },
];

export default worksRoutes;
