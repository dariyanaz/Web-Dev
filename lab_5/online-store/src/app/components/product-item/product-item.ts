import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  currentIndex = signal(0);
  shareOpen = signal(false);
  showConfirm = signal(false);

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

  like(): void {
    this.product().likes++;
  }

  confirmDelete(): void {
    this.showConfirm.set(true);
  }

  cancelDelete(): void {
    this.showConfirm.set(false);
  }

  doDelete(): void {
    this.delete.emit(this.product().id);
    this.showConfirm.set(false);
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