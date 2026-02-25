import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Планшеты' }
    ];
  }

  getProducts(): Product[] {
    return [
      // ── СМАРТФОНЫ (categoryId: 1) ──
      {
        id: 1,
        categoryId: 1,
        name: 'Apple iPhone 15 Pro 256GB',
        description: 'Смартфон с чипом A17 Pro, титановым корпусом и камерой 48 МП. Поддержка USB-C и Action Button.',
        price: 749000,
        rating: 4.9,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-nanosim-esim-seryi-113138213/?c=750000000'
      },
      {
        id: 2,
        categoryId: 1,
        name: 'Samsung Galaxy S24 Ultra 256GB',
        description: 'Флагман со встроенным S Pen и камерой 200 МП. Galaxy AI для обработки фото и переводов.',
        price: 604358,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=preview-large',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
      },
      {
        id: 3,
        categoryId: 1,
        name: 'Apple iPhone 15 128GB',
        description: 'Смартфон с Dynamic Island, камерой 48 МП и чипом A16 Bionic. Прочное стекло Ceramic Shield.',
        price: 400531,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000'
      },
      {
        id: 4,
        categoryId: 1,
        name: 'Samsung Galaxy A55 256GB',
        description: 'Смартфон с AMOLED дисплеем 120 Гц, камерой 50 МП и аккумулятором 5000 мАч.',
        price: 289990,
        rating: 4.6,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h96/h5b/85428899545118.png?format=gallery-medium'
        ],
        link: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large'
      },
      {
        id: 5,
        categoryId: 1,
        name: 'Xiaomi Redmi Note 14 Pro 12 ГБ/512 ГБ',
        description: 'Смартфон с камерой Leica, чипом Snapdragon 8 Gen 3 и зарядкой 120 Вт.',
        price: 201000,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p4b/pbd/73805545.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p47/pb8/23140922.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pba/pb7/23140927.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-fioletovyi-134217124/?c=750000000'
      },

      // ── НОУТБУКИ (categoryId: 2) ──
      {
        id: 6,
        categoryId: 2,
        name: 'Apple MacBook Air 13 16GB 512GB',
        description: 'Тонкий ноутбук на чипе M3 с автономностью 18 часов и дисплеем Liquid Retina 15.3".',
        price: 648000,
        rating: 4.9,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p6f/pa7/37097219.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p92/p91/37097220.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pc1/p3a/36844515.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mc6u4-138225601/?c=750000000'
      },
      {
        id: 7,
        categoryId: 2,
        name: 'Apple MacBook Pro 14" M3 Pro 18GB 512GB',
        description: 'Профессиональный ноутбук с чипом M3 Pro, дисплеем Liquid Retina XDR и автономностью 22 часа.',
        price: 1090000,
        rating: 4.9,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p21/pf2/62460020.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pb7/pee/62460021.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4d/peb/62460022.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2w3-134209187/?c=750000000'
      },
      {
        id: 8,
        categoryId: 2,
        name: 'ASUS ZenBook 14 OLED 1000GB',
        description: 'Ультрабук с OLED-дисплеем 2.8K 120 Гц, процессором Intel Core i5 и весом 1.2 кг.',
        price: 748000,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pae/p6b/25986296.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p92/p6b/25986297.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p76/p6b/25986298.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-zenbook-14-oled-14-16-gb-ssd-1000-gb-win-11-ux3405ca-pp448w-90nb14w2-m00lr0-135044585/?c=750000000'
      },
      {
        id: 9,
        categoryId: 2,
        name: ' Lenovo ThinkPad X1 Carbon G13 512GB',
        description: 'Бизнес-ноутбук с процессором Intel Core i7, весом 1.12 кг и защитой MIL-STD-810H.',
        price: 1950000,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p21/pb4/55821876.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p21/pb4/55821876.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p21/pb4/55821876.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-g13-14-16-gb-ssd-512-gb-win-11-pro-21nx00f1fw-143298598/?c=750000000'
      },
      {
        id: 10,
        categoryId: 2,
        name: 'HP EliteBook 840 G11 512GB',
        description: 'Ноутбук с AMOLED-дисплеем 3K, процессором Intel Core Ultra 7 и аккумулятором 76 Вт·ч.',
        price: 761635,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p73/p00/21724103.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p8f/p00/21724104.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pab/p00/21724105.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hp-elitebook-840-g11-core-ultra-5-125u-512gb-ssd-16gb-14-0-quot-wuxga-ips-win-11-pro-a26s9ea-14-16-gb-ssd-512-gb-win-11-pro-a26s9ea-133847483/?c=750000000'
      },

      // ── НАУШНИКИ (categoryId: 3) ──
      {
        id: 11,
        categoryId: 3,
        name: 'Sony WH-1000XM5',
        description: 'Лучшее в отрасли шумоподавление, автономность 30 часов и подключение к двум устройствам.',
        price: 135000,
        rating: 4.9,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
      },
      {
        id: 12,
        categoryId: 3,
        name: 'Apple AirPods Pro 2nd Generation',
        description: 'Беспроводные наушники с активным шумоподавлением на чипе H2 и адаптивным звуком.',
        price: 102453,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
      },
      {
        id: 13,
        categoryId: 3,
        name: 'Bose QuietComfort 45',
        description: 'Накладные наушники с шумоподавлением, автономностью 24 часа и мягкими амбушюрами.',
        price: 119000,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000'
      },
      {
        id: 14,
        categoryId: 3,
        name: 'Samsung Galaxy Buds3 Pro',
        description: 'Наушники-вкладыши с ANC, звуком Hi-Fi и до 6 часов работы на одном заряде.',
        price: 75000,
        rating: 4.6,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h74/h34/86487967432734.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h43/h5d/86487967563806.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h78/h7e/86487967629342.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-belyi-121198942/?c=750000000'
      },
      {
        id: 15,
        categoryId: 3,
        name: 'Apple AirPods Max',
        description: 'Премиальные накладные наушники с шумоподавлением, пространственным звуком и чипом H1.',
        price: 320000,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h64/hfe/64217007554590.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd6/h71/64217010241566.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hcc/ha0/64217012469790.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-sinii-101180956/?c=750000000'
      },

      // ── ПЛАНШЕТЫ (categoryId: 4) ──
      {
        id: 16,
        categoryId: 4,
        name: 'iPad Pro 12.9" M2 128GB Wi-Fi',
        description: 'Планшет на чипе M2 с дисплеем Liquid Retina XDR, поддержкой Apple Pencil и ProRes-видео.',
        price: 660000,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000'
      },
      {
        id: 17,
        categoryId: 4,
        name: 'Apple iPad Air 11" M2 128GB Wi-Fi',
        description: 'Лёгкий планшет на чипе M2 с дисплеем Liquid Retina и поддержкой Apple Pencil Pro.',
        price: 324840,
        rating: 4.8,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000'
      },
      {
        id: 18,
        categoryId: 4,
        name: 'Samsung Galaxy Tab S9+ 128GB Wi-Fi',
        description: 'Планшет с AMOLED-дисплеем 12.4" 120 Гц, чипом Snapdragon 8 Gen 2 и S Pen в комплекте.',
        price: 689000,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb0/p5e/25861337.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p94/p5e/25861338.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0c/p5c/25861340.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-tab-s9-fe-plus-wi-fi-12-4-djuim-8-gb-128-gb-serebristyi-135008205/?c=750000000'
      },
      {
        id: 19,
        categoryId: 4,
        name: 'Apple iPad 10th Gen 256GB Wi-Fi',
        description: 'Базовый iPad с дисплеем 10.9" Liquid Retina, чипом A14 Bionic и поддержкой USB-C.',
        price: 383800,
        rating: 4.7,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h59/hb3/86369746649118.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfa/h6c/86369746681886.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000'
      },
      {
        id: 20,
        categoryId: 4,
        name: 'Xiaomi Pad 7 Pro 512GB Wi-Fi',
        description: 'Планшет с дисплеем 11" 144 Гц, чипом Snapdragon 8 Gen 2 и быстрой зарядкой 67 Вт.',
        price: 280000,
        rating: 4.6,
        likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p00/pd8/30093133.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p00/pd8/30093133.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p00/pd8/30093133.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-7-pro-11-2-djuim-12-gb-512-gb-seryi-136297956/?c=750000000'
      }
    ];
  }
}