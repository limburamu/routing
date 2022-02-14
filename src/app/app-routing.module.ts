import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UserComponent} from './user/user.component'
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path:'user', //Remove / and text after it
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }