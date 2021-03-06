import { DTO_dayli_quote_currencie } from './DTO-dayli-quote-currencie';

import { BaseSerive } from './../base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/constants/configurations';
import {Observable   } from 'rxjs';
import {catchError, map, timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FinalciaApiService extends BaseSerive {

  constructor(
    private _http: HttpClient,
    private _config: Configuration
  ) {
    super();
   }

   public getDayliQuoteCurrencie(nameCurrencie: string): Observable<DTO_dayli_quote_currencie[]> {
    return this._http.get<DTO_dayli_quote_currencie[]>(this._config.environment.API.financial.base_url+'/daily/'+nameCurrencie+'/10')
    .pipe(
      timeout(30000),
      map((res: DTO_dayli_quote_currencie[]) => {
          return res;
      })
    );
   }
   public getDayli5daysQuoteCurrencie(nameCurrencie: string): Observable<DTO_dayli_quote_currencie[]> {

      return this._http.get<DTO_dayli_quote_currencie[]>(this._config.environment.API.financial.base_url+'/daily/'+nameCurrencie+"/5")
      .pipe(
        timeout(30000),
        map((res: DTO_dayli_quote_currencie[]) => {

          return res;
        })
      );
   }

   public getCurrentQuote(nameCurrencies: string): Observable<any> {
    return this._http.get<DTO_dayli_quote_currencie[]>(this._config.environment.API.financial.base_url+'/last/'+nameCurrencies)
    .pipe(
      timeout(30000),
      map((res: any) => {
        return res;
      })
    );

   }
}
