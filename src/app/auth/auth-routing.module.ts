import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   { path:'',redirectTo:"Login",pathMatch:"full"},
   { path:'Login',component:LoginComponent},
   { path:'Register',component:RegisterComponent},
   { path:'Forgot',component:ForgotComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
