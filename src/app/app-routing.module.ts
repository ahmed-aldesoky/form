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
<<<<<<< HEAD
  {path:'homePage', component:HomePageComponent},
=======
  {path:'homePage/:name', component:HomePageComponent},
>>>>>>> 1871ed08d0ef818de92b18b0d33fba3373da17d0



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
