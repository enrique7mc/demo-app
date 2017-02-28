import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Product } from './models/product.interface';

const PASSENGER_API: string = '/api/products';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDashboardService {

  constructor(private http: Http) { }

  getProducts(): Product[] {
    let observable = this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());

    observable.subscribe((data: Product[]) => {
        console.log(data);
      });

    return [
        {
          id: 1,
          name: 'PC',
          stock: 9,
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
          name: 'Lamp',
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
  }
