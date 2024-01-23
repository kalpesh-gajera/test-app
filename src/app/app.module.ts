import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDeatilsComponent } from './post-deatils/post-deatils.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpErrorInterceptor} from './http-error.interceptor';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostListComponent,
    PostDeatilsComponent,
    PostCommentsComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    HomeComponent,
    LoaderComponent,
    AddUserComponent,
    TermsOfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
