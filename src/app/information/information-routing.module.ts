import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { SuplierComponent } from './suplier/suplier.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  { path:'',redirectTo:"category",pathMatch:"full"},
  { path:'category',component:CategoryComponent},
  { path:'unit',component:UnitComponent},
  { path:'product',loadChildren: ()=> import('./product/product.module').then(m=>m.ProductModule)},
  { path:'suplier',component:SuplierComponent},
  { path:'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
