import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { DbTables } from '@api/db-tables.enum';
import { ProductMapper } from '../product.mapper';
import {
  Product,
  ProductDto,
  ProductMutation,
} from '@app/catalog/models/product';
import { FilterData } from '@app/common/interfaces/filter-data';
import { stringToTitleCase } from '@app/common/utils/string-title-case';
import { SUPABASE_CLIENT } from '@api/constants';
import { API } from '@api/index';

interface RequestFilters {
  filterBy?: {
    column: string;
    value: string;
  };
  orderBy?: {
    field: string;
    ascending: boolean;
  };
  limit?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _db = SUPABASE_CLIENT;

  constructor() {}

  public getProductCount(): Observable<number> {
    return API.getProductRowCount();
  }

  public getProducts(filters?: RequestFilters): Observable<Product[]> {
    return API.getProducts<ProductDto[]>(filters).pipe(
      map((response) => {
        return response.map((item) => ProductMapper.toEntity(item));
      }),
    );
  }

  public getProductsBy({
    query,
    field,
    limit,
  }: FilterData): Observable<Product[]> {
    query = stringToTitleCase(query);

    return from(
      this._db
        .from(DbTables.PRODUCTS)
        .select('*')
        .ilike(field, `%${query}%`)
        .range(0, limit - 1),
    ).pipe(
      map(({ data, error }) => {
        if (error) {
          throw new Error(error.message);
        }

        return (data as ProductDto[]).map((item) =>
          ProductMapper.toEntity(item),
        );
      }),
    );
  }

  public getProductById(productId: number): Observable<Product> {
    return API.getProductById<ProductDto>(productId).pipe(
      map((response) => {
        return ProductMapper.toEntity(response);
      }),
    );
  }

  public createProduct(data: ProductMutation): Observable<boolean> {
    const dto: ProductDto = ProductMapper.toDto(data);

    return API.createProduct(dto).pipe(
      map((response) => {
        return response === 201 ? true : false;
      }),
    );
  }

  public updateProduct(
    productId: number,
    data: ProductMutation,
  ): Observable<boolean> {
    const dto: ProductDto = ProductMapper.toDto(data);

    return API.updateProduct(productId, dto).pipe(
      map((response) => {
        return response === 204 ? true : false;
      }),
    );
  }
}
