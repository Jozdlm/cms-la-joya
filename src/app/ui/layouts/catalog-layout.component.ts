import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, SidenavComponent } from '@app/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent],
  template: `
    <app-sidenav [navigationItems]="navItems" />
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './catalog-layout.component.scss',
})
export class CatalogLayoutComponent {
  public navItems: NavItem[] = [
    { path: 'products', placeholder: 'Productos' },
    { path: 'categories', placeholder: 'Categorías' },
  ];
}