import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimatempoComponent } from './climatempo/climatempo.component';

const routes: Routes = [
  { path: '', component: ClimatempoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
