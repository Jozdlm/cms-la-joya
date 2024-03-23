import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  template: `
    <h1>¡Bienvenido!</h1>
    <p>Algunos atajos rápidos que puedes tomar</p>

    <a routerLink="/quotations/add/" mat-stroked-button>Nueva cotización</a>
  `,
})
export class HomePage {}
