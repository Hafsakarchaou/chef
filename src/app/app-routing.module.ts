import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandesComponent } from './demandes/demandes.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:"", component:ProfilComponent},
  {path:"demandes", component:DemandesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
