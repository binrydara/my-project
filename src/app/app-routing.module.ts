import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'',redirectTo:"Auth",pathMatch:"full"},
   { path:'Auth',loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)},
   { path:'Main',loadChildren: ()=> import('./main/main.module').then(m=>m.MainModule)},
   { path:'Order',loadChildren: ()=> import('./order/order.module').then(m=>m.OrderModule)},
   { path:'information',loadChildren: ()=> import('./information/information.module').then(m=>m.InformationModule)}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
