import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  detail: Product;

  editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    // if (this.editing) {
    //   this.edit.emit(this.detail);
    // }
    this.editing = !this.editing;
  }

  onNameChange(value: string) {
    console.log(value);
    this.detail.name = value;
  }

}
