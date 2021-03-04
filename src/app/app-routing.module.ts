import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';
const routes: Routes = [
  {path: '', redirectTo: 'account/login', pathMatch: 'full'},

  {path: 'account/login', component: LoginComponent},
  {path: 'account/data', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
