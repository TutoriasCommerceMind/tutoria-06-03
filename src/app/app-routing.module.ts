import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComidaDetailComponent } from './comida-detail/comida-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TablaGeneralComponent,
  },
  {
    path: 'comida/:id',
    component: ComidaDetailComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
