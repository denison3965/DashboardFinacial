import { Configuration } from './../../constants/configurations';
import { BaseSerive } from './../base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe  } from 'rxjs';
import {catchError, map, timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IBOVESPAServiceService extends BaseSerive {

  constructor(
    private _http: HttpClient,
    private _config: Configuration
  ) {
    super();
  }

  public getDataStockExchange(): Observable<any> {
    return this._http.get<any>( this._config.environment.API.ibovesta.base_url )
    .pipe(
      timeout(30000),
      map(res => {
        console.log(res);
      })
    )
  }
}
