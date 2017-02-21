import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductDashboardComponent },      
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDashboardComponent]
})
export class ProductDashboardModule { }