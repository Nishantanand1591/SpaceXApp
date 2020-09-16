import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { SpaceNameComponent } from './space-name/space-name.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "filter", component: SpaceNameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
