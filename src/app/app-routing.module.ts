import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlatGuard} from './plat.guard';
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';
<<<<<<< HEAD

=======
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
>>>>>>> 9fd6c1f36cd3aa36af0d758e94123a50cf80686b

const routes: Routes = [{path: "plats" ,component:PlatsComponent},
{path: "add-plat",component:AddPlatComponent,canActivate:[PlatGuard]},
{path: "updatePlat/:id", component: UpdatePlatComponent},
{path: 'login', component: LoginComponent},
{path: 'forbidden', component : ForbiddenComponent},
{path: 'rechercheParStyle', component : RechercheParStyleComponent},
<<<<<<< HEAD
=======
{path: 'rechercheParNOM', component : RechercheParNomComponent},
>>>>>>> 9fd6c1f36cd3aa36af0d758e94123a50cf80686b
{ path: "", redirectTo: "plats", pathMatch: "full" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
