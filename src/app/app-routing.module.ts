import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'
import { DashboardComponent } from './vistas/dashboard/dashboard.component'
import { NuevoComponent } from './vistas/nuevo/nuevo.component'

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent },
  { path:'', redirectTo:'nuevo', pathMatch:'full'},
  { path:'nuevo', component:NuevoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent]
