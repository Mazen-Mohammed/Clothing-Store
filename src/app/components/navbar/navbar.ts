import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly links = [
    { label: 'Products', path: '/products' },
    { label: 'New Arrivals', path: '/home' },
    { label: 'Women', path: '/home' },
    { label: 'Men', path: '/home' },
    { label: 'Collections', path: '/home' },
    { label: 'Stories', path: '/home' },
  ];
}
