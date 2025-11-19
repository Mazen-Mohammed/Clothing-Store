import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.products$ = this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
