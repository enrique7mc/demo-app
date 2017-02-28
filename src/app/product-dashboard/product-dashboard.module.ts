import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';
import { ProductCountComponent } from './components/product-count/product-count.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Service
import { ProductDashboardService } from './product-dashboard.service';

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
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductDashboardComponent,
    ProductCountComponent,
    ProductDetailComponent
  ],
  providers: [ProductDashboardService]
})
export class ProductDashboardModule { }
