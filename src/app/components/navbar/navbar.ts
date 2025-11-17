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
    { label: 'New Arrivals', fragment: 'new' },
    { label: 'Women', fragment: 'women' },
    { label: 'Men', fragment: 'men' },
    { label: 'Collections', fragment: 'collections' },
    { label: 'Stories', fragment: 'stories' },
  ];
}
