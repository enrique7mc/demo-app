import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'; 

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[] = [
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
  ]

  constructor() { }

  ngOnInit() {
  }

  handleRemove(event: Product) {
    console.log(`deleting: ${event.name}`);
    // TODO actually delete item
  }

}
