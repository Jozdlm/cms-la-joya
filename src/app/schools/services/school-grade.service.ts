import { Injectable, inject } from '@angular/core';
import { SupabaseService } from 'src/app/common/services/supabase.service';
import { SchoolGrade } from '../models/school-grades';
import { DbTables } from '@app/common/enums/db-tables';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolGradeService {
  private readonly _db = inject(SupabaseService).supabase;

  constructor() {}

  public getSchoolGrades(): Observable<SchoolGrade[]> {
    return from(this._db.from(DbTables.SCHOOL_GRADES).select('*')).pipe(
      map(({ data, error }) => {
        if (error) throw new Error(error.message);

        return data as SchoolGrade[];
      }),
    );
  }

  public getGradeById(gradeId: number): Observable<SchoolGrade> {
    return from(
      this._db.from(DbTables.SCHOOL_GRADES).select('*').eq('id', gradeId),
    ).pipe(
      map(({ data, error }) => {
        if (error) throw new Error(error.message);

        return data[0] as SchoolGrade;
      }),
    );
  }
}
