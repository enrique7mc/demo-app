import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {
  @Input()
  detail: Product;

  @Output()
  remove: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  edit: EventEmitter<Product> = new EventEmitter<Product>();

  editing: boolean = false;

  constructor() { }

  ngOnChanges(changes) {
    if(changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onNameChange(value: string) {
    this.detail.name = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
