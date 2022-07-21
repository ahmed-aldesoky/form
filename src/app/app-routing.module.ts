import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'',redirectTo:'/personalinfo', pathMatch:'full'},
  {path:'Login', component:LoginComponent},
  {path:'forgetpass', component:ForgetpassComponent},
  {path:'personalinfo', component:PersonalinfoComponent},
  {path:'homePage', component:HomePageComponent},




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
