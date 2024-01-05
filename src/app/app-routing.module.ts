import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layouts/home/home.component';
import { PagenotfoundComponent } from './components/layouts/Pagenotfound/Pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: '**', component: PagenotfoundComponent }, // wildcard route for unknown paths - (Add this wildcard to last index, else it will throw an error to known route also)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
