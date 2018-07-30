import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchComponent } from './batch.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Batch'
    },
    children: [
      {
        path: 'create',
        component: BatchComponent,
        data: {
          title: 'Batch Formation'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule {

}