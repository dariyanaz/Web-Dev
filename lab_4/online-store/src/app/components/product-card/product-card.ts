import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  product = input.required<Product>();

  currentIndex = signal(0);
  shareOpen = signal(false);

  currentImage = computed(() => this.product().images[this.currentIndex()]);

  stars = computed(() =>
    Array.from({ length: 5 }, (_, i) => {
      const r = this.product().rating;
      if (i < Math.floor(r)) return 'full';
      if (i < r) return 'half';
      return 'empty';
    })
  );

  formattedPrice = computed(() =>
    new Intl.NumberFormat('ru-KZ', {
      style: 'currency',
      currency: 'KZT',
      maximumFractionDigits: 0
    }).format(this.product().price)
  );

  prev(e: Event): void {
    e.stopPropagation();
    const len = this.product().images.length;
    this.currentIndex.update(i => (i - 1 + len) % len);
  }

  next(e: Event): void {
    e.stopPropagation();
    const len = this.product().images.length;
    this.currentIndex.update(i => (i + 1) % len);
  }

  goTo(index: number, e: Event): void {
    e.stopPropagation();
    this.currentIndex.set(index);
  }

  toggleShare(e: Event): void {
    e.stopPropagation();
    this.shareOpen.update(v => !v);
  }

  shareWhatsApp(e: Event): void {
    e.stopPropagation();
    const text = encodeURIComponent(this.product().name + ' — ' + this.product().link);
    window.open('https://wa.me/?text=' + text, '_blank');
    this.shareOpen.set(false);
  }

  shareTelegram(e: Event): void {
    e.stopPropagation();
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank');
    this.shareOpen.set(false);
  }

  closeShare(): void {
    this.shareOpen.set(false);
  }
}