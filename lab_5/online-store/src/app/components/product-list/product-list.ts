import { Component, input, OnChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnChanges {
  products = input.required<Product[]>();

  displayedProducts = signal<Product[]>([]);

  ngOnChanges(): void {
    this.displayedProducts.set([...this.products()]);
  }

  onDelete(productId: number): void {
    this.displayedProducts.update(list => list.filter(p => p.id !== productId));
  }
}