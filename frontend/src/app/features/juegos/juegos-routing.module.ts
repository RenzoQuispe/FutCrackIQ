import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosUCLComponent } from './pages/partidos-ucl/partidos-ucl.component';
import { JuegosHomeComponent } from './pages/HomePageJuegos/home-juegos.component';

const routes: Routes = [
  { path: '', component: JuegosHomeComponent },
  { path: 'partidos-ucl', component: PartidosUCLComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule { }