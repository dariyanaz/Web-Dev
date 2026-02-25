import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  private productService = inject(ProductService);

  categories: Category[] = this.productService.getCategories();
  allProducts: Product[] = this.productService.getProducts();

  selectedCategoryId = signal<number | null>(null);

  selectedCategory = computed(() =>
    this.categories.find(c => c.id === this.selectedCategoryId()) ?? null
  );

  filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.allProducts.filter(p => p.categoryId === id);
  });

  selectCategory(id: number): void {
    this.selectedCategoryId.set(id);
  }
}