import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateComponent} from './common/create/create.component';
import {ReadComponent} from './common/read/read.component';
import { UpdateComponent } from './common/update/update.component';
import { DeleteComponent } from './common/delete/delete.component';
import { GetidComponent } from './common/getid/getid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  }
  ,
  {
    path: 'update',
    component: UpdateComponent
  }
  ,
  {
    path: 'Getid',
    component: GetidComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
