import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Product = {
  name: string;
  price: string;
  image: string;
  category: string;
};

type ProductApi = {
  title: string;
  price: number;
  image: string;
  category: string;
};

type Story = {
  title: string;
  excerpt: string;
  image: string;
};

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  cta: string;
};

type Category = {
  label: string;
  color: string;
  anchor: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

  private readonly http = inject(HttpClient);

  protected readonly Products = signal<Product[]>([]);
  protected readonly featuredProducts = signal<Product[]>([]);

  protected readonly spotlightStories: Story[] = [
    {
      title: 'Lorem ipsum dolor sit',
      excerpt:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In temporibus quod dolores, voluptatum repudiandae quia adipisci consectetur ipsa vitae magni.',
      image:
        'women-story.jpg',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur',
      excerpt:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In temporibus quod dolores, voluptatum repudiandae quia.',
      image:
        'men-story.jpg',
    },
  ];

  protected readonly womensFeature: Feature = {
    eyebrow: 'Women',
    title: 'Soft structure, clean tailoring',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image:
      'women.jpg',
    stats: [
      { label: 'Clothes', value: ' Dresses | Tops | Pants | Jackets ' },
      { label: 'Accessories', value: 'Jewellery | Bags' },
    ],
    cta: 'Explore the womenswear Collection',
  };

  protected readonly mensFeature: Feature = {
    eyebrow: 'Men',
    title: 'Utility pieces cut with precision',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    image:
      'men2.jpg',
    stats: [
      { label: 'Clothes', value: 'T-Shirts | Pants | Jackets' },
      { label: 'Accessories', value: 'Bags' },
    ],
    cta: 'Shop the mens Collection',
  };

  protected readonly categories: Category[] = [
    { label: 'New Collection', color: '#f4ede4', anchor: 'new' },
    { label: 'Womens wear', color: '#e6f2f2', anchor: 'women' },
    { label: 'Mens Wear', color: '#ecf1f6', anchor: 'men' },
  ];

  constructor() {
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts(): void {
    this.http
      .get<ProductApi[]>('https://fakestoreapi.com/products?limit=4')
      .subscribe({
        next: (products) => {
          this.featuredProducts.set(
            products.map((product) => ({
              name: product.title,
              price: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EGP',
              }).format(product.price),
              image: product.image,
              category: product.category,
            }))
          );
        },
      });
  }
}
