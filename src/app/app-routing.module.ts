import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {path: 'users', component: SearchComponent},
    {path: 'repository', component: RepositoriesComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
