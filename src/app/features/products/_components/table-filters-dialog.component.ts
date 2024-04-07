import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../categories/category';
import { CommonModule } from '@angular/common';
import { InputFieldDirective } from '@app/ui';

@Component({
  selector: 'app-filters-dialog',
  standalone: true,
  imports: [CommonModule, InputFieldDirective],
  template: `
    <div
      class="block w-full min-w-[480px] max-w-max rounded-lg bg-white px-6 py-4"
    >
      <div class="mb-3">
        <p class="fw-medium mb-1">Categorías</p>
        <form>
          @for (item of categories$ | async; track item.id) {
            <div class="form-check">
              <input
                type="checkbox"
                [id]="item.name"
                title="category checkbox"
                class="form-check-input"
              />
              <label [for]="item.name" class="form-check-label">
                {{ item.name }}
              </label>
            </div>
          }
        </form>
      </div>
      <div class="mb-3">
        <label for="stockSelect" class="form-label fw-medium"
          >Existencias</label
        >
        <select
          class="form-select form-select-sm"
          aria-label="Stock select"
          id="stockSelect"
          uiInputField
        >
          <option selected>Todos los registros</option>
          <option value="true">En existencia</option>
          <option value="false">Sin existencias</option>
        </select>
      </div>
      <div>
        <label for="stateSelect" class="form-label fw-medium">Estado</label>
        <select
          class="form-select form-select-sm"
          aria-label="State select"
          id="stateSelect"
          uiInputField
        >
          <option selected>Todos los registros</option>
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
      </div>
      <div>
        <button>Cancelar</button>
        <button>Filtrar</button>
      </div>
    </div>
  `,
})
export class TableFiltersDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public categories$: Observable<Category[]>,
  ) {}
}
