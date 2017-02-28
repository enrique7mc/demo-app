import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface'; 

import { ProductDashboardService } from '../../product-dashboard.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[];

  constructor(private productDashboardService: ProductDashboardService) { }

  ngOnInit() {
    this.products = this.productDashboardService.getProducts();
  }

  handleEdit(event: Product) {    
    this.products = this.products.map((product: Product) => {
      if (product.id === event.id) {
        product = Object.assign({}, product, event);
      }
      
      return product;
    })
  }

  handleRemove(event: Product) {    
    this.products = this.products.filter((product: Product) => product.id !== event.id);
  }
}
