import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostDeatilsComponent } from './post-deatils/post-deatils.component';
import { PostListComponent } from './post-list/post-list.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashbord', component:DashbordComponent, canActivate:[AuthGuard]},
  {path:'post-comments', component:PostCommentsComponent},
  {path:'post-deatils', component:PostDeatilsComponent},
  {path:'post-list', component:PostListComponent},
  {path:'users', component:UsersComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'app-terms-of-service', component:TermsOfServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
