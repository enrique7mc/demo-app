import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent {
  @Input()
  items: Product[];

  availableCount(): number {
    if (!this.items) return;

    return this.items.filter((product: Product) => product.available).length;
  }

}
