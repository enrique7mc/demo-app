import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'; 

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'PC',
        stock: 10,
        available: true
      },
      {
        id: 2,
        name: 'Chromecast',
        stock: 3,
        available: true
      },
      {
        id: 3,
        name: 'Fridge',
        stock: 0,
        available: false
      },
      {
        id: 4,
        name: 'Keyboard',
        stock: 1,
        available: true
      }
    ];
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
