import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { CategoryComponent } from './category/category.component';
import { UnitComponent } from './unit/unit.component';
import { SuplierComponent } from './suplier/suplier.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    InformationComponent,
    CategoryComponent,
    UnitComponent,
    SuplierComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
