import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly menuColumns = [
    {
      label: 'Customer care',
      links: ['Shipping & returns', 'FAQs'],
    },
    {
      label: 'Company',
      links: ['About us', 'Store locator', 'Careers'],
    },
    {
      label: 'Connect',
      links: ['Newsletter', 'Contact Us'],
    },
  ];
}
