import { DbTables } from '@app/common';
import { SUPABASE_CLIENT } from './constants';
import { Observable, from, map } from 'rxjs';
import { CategoryDto } from '@app/catalog/models/category';

function getCategories(): Observable<CategoryDto[]> {
  return from(
    SUPABASE_CLIENT.from(DbTables.CATEGORIES)
      .select('*')
      .order('id', { ascending: true }),
  ).pipe(
    map(({ data, error }) => {
      if (error) throw new Error(error.message);

      return data as CategoryDto[];
    }),
  );
}

function getCategoryById(categoryId: number): Observable<CategoryDto> {
  return from(
    SUPABASE_CLIENT.from(DbTables.CATEGORIES).select('*').eq('id', categoryId),
  ).pipe(
    map(({ data, error }) => {
      if (error) throw new Error(error.message);

      return data[0] as CategoryDto;
    }),
  );
}

function createCategory(dto: CategoryDto): Observable<number> {
  return from(SUPABASE_CLIENT.from(DbTables.CATEGORIES).insert(dto)).pipe(
    map(({ status, error }) => {
      if (error) throw new Error(error.message);

      return status;
    }),
  );
}

function updateCategory(
  dto: CategoryDto,
  categoryId: number,
): Observable<number> {
  return from(
    SUPABASE_CLIENT.from(DbTables.CATEGORIES).update(dto).eq('id', categoryId),
  ).pipe(
    map(({ status, error }) => {
      if (error) throw new Error(error.message);

      return status;
    }),
  );
}

export const API = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
};
