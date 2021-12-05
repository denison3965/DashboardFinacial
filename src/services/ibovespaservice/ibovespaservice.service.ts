import { IibovespaDatas } from 'src/services/ibovespaservice/DTO-IBOVESPA-datas';
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

  private data: IibovespaDatas[] = [
      {"data":"08/18/2020","abertura":99597, "fechamento":102.065,"variacao":"2.48","minimo":99597,"maximo":102247,"volume":"29,09B", id:1},
      {"data":"08/17/2020","abertura":101348,"fechamento":99.595,"variacao":"-1.73","minimo":98513,"maximo":101689,"volume":"45,31B", id:2},
      {"data":"08/14/2020","abertura":100469,"fechamento":101.353,"variacao":"0.89","minimo":100445,"maximo":10171,"volume":"28,84B", id:3},
      {"data":"08/13/2020","abertura":102118,"fechamento":100.461,"variacao":"-1.62","minimo":100187,"maximo":103237,"volume":"32,94B", id:4},
      {"data":"08/12/2020","abertura":102176,"fechamento":102.118,"variacao":"-0.06","minimo":100698,"maximo":103116,"volume":"57,20B", id:5},
      {"data":"08/11/2020","abertura":103449,"fechamento":102.174,"variacao":"-1.23","minimo":102174,"maximo":104409,"volume":"28,59B", id:6},
      {"data":"08/10/2020","abertura":102776,"fechamento":103.444,"variacao":"0.65","minimo":101282,"maximo":103722,"volume":"25,02B", id:7},
      {"data":"08/07/2020","abertura":104116,"fechamento":102.776,"variacao":"-1.3","minimo":101957,"maximo":104126,"volume":"29,28B", id:8},
      {"data":"08/06/2020","abertura":102795,"fechamento":104.126,"variacao":"1.29","minimo":102795,"maximo":104523,"volume":"26,41B", id:9},
      {"data":"08/05/2020","abertura":10122,"fechamento":102.802,"variacao":"1.57","minimo":101.22,"maximo":103763,"volume":"30,67B", id:10},
      {"data":"08/04/2020","abertura":102826,"fechamento":101.216,"variacao":"-1.57","minimo":100005,"maximo":103012,"volume":"40,35B", id:11},
      {"data":"08/03/2020","abertura":102913,"fechamento":102.13,"variacao":"-0.08","minimo":102304,"maximo":103863,"volume":"30,62B", id:12},
      {"data":"07/31/2020","abertura":105.01,"fechamento":102.912,"variacao":"-2","minimo":102642,"maximo":105462,"volume":"34,69B", id:13},
      {"data":"07/30/2020","abertura":105605,"fechamento":105.009,"variacao":"-0.56","minimo":103.92,"maximo":105607,"volume":"29,23B", id:14},
      {"data":"07/29/2020","abertura":104112,"fechamento":105.605,"variacao":"1.44","minimo":104112,"maximo":105704,"volume":"28,01B", id:15},
      {"data":"07/28/2020","abertura":104477,"fechamento":104.109,"variacao":"-0.35","minimo":103592,"maximo":104663,"volume":"26,90B", id:16},
      {"data":"07/27/2020","abertura":102381,"fechamento":104.477,"variacao":"2.05","minimo":102381,"maximo":104585,"volume":"28,52B", id:17},
      {"data":"07/24/2020","abertura":102292,"fechamento":102.382,"variacao":"0.09","minimo":100859,"maximo":102694,"volume":"27,36B", id:18},
      {"data":"07/23/2020","abertura":104291,"fechamento":102.293,"variacao":"-1.91","minimo":102119,"maximo":104949,"volume":"29,35B", id:19},
      {"data":"07/22/2020","abertura":104312,"fechamento":104.29,"variacao":"-0.02","minimo":103277,"maximo":104.98,"volume":"28,46B", id:20},
      {"data":"07/21/2020","abertura":104426,"fechamento":104.31,"variacao":"-0.11","minimo":103732,"maximo":105449,"volume":"33,18B", id:1},
      {"data":"07/20/2020","abertura":102888,"fechamento":104.426,"variacao":"1.49","minimo":102744,"maximo":104439,"volume":"39,46B", id:1},
      {"data":"07/17/2020","abertura":100554,"fechamento":102.888,"variacao":"2.32","minimo":100554,"maximo":103017,"volume":"29,64B", id:1},
      {"data":"07/16/2020","abertura":101791,"fechamento":100.553,"variacao":"-1.22","minimo":100.16,"maximo":101792,"volume":"24,00B", id:1},
      {"data":"07/15/2020","abertura":100444,"fechamento":101.791,"variacao":"1.34","minimo":100444,"maximo":102114,"volume":"28,79B", id:1},
      {"data":"07/14/2020","abertura":98699, "fechamento": 100.44,"variacao":"1.77","minimo":98289,"maximo":100632,"volume":"29,42B", id:1},
      {"data":"07/13/2020","abertura":100027,"fechamento":98.697,"variacao":"-1.33","minimo":98697,"maximo":100858,"volume":"28,27B", id:1},
      {"data":"07/10/2020","abertura":99.16,"fechamento":100.032,"variacao":"0.88","minimo":98739,"maximo":100101,"volume":"24,38B", id:1},
      {"data":"07/09/2020","abertura":99.77,"fechamento":99.26,"variacao":"-0.61","minimo":98861,"maximo":100191,"volume":"26,54B", id:1},
      {"data":"07/08/2020","abertura":97765,"fechamento":99.17,"variacao":"2.05","minimo":97765,"maximo":99973,"volume":"26,60B", id:1},
      {"data":"07/07/2020","abertura":98937,"fechamento":97.761,"variacao":"-1.19","minimo":97272,"maximo":98938,"volume":"25,54B", id:1},
      {"data":"07/06/2020","abertura":96776,"fechamento":98.937,"variacao":"2.24","minimo":96768,"maximo":99257,"volume":"14,37B", id:1},
      {"data":"07/03/2020","abertura":96237,"fechamento":96.765,"variacao":"0.55","minimo":95803,"maximo":96765,"volume":"14,61B", id:1},
      {"data":"07/02/2020","abertura":96206,"fechamento":96.235,"variacao":"0.03","minimo":96052,"maximo":97864,"volume":"27,02B", id:1},
      {"data":"07/01/2020","abertura":95062,"fechamento":96.203,"variacao":"1.21","minimo":95062,"maximo":96852,"volume":"28,23B", id:1},
      {"data":"06/30/2020","abertura":95728,"fechamento":95.056,"variacao":"-0.71","minimo":94806,"maximo":96257,"volume":"27,40B", id:1},
      {"data":"06/29/2020","abertura":95728,"fechamento":95.735,"variacao":"2.03","minimo":93825,"maximo":95735,"volume":"22,27B", id:1},
      {"data":"06/26/2020","abertura":95979,"fechamento":93.834,"variacao":"-2.24","minimo":93514,"maximo":95979,"volume":"23,15B", id:1},
      {"data":"06/25/2020","abertura":94382,"fechamento":95.983,"variacao":"1.7","minimo":94152,"maximo":96.26,"volume":"23,30B", id:1},
      {"data":"06/24/2020","abertura":95974,"fechamento":94.377,"variacao":"-1.66","minimo":93259,"maximo":95974,"volume":"25,94B", id:1},
      {"data":"06/23/2020","abertura":95344,"fechamento":95.975,"variacao":"0.67","minimo":95344,"maximo":97486,"volume":"17,67B", id:1},
      {"data":"06/22/2020","abertura":96572,"fechamento":95.336,"variacao":"-1.28","minimo":94869,"maximo":96.87,"volume":"23,20B", id:1},
      {"data":"06/19/2020","abertura":96138,"fechamento":96.572,"variacao":"0.46","minimo":95874,"maximo":97.54,"volume":"38,67B", id:1},
      {"data":"06/18/2020","abertura":95547,"fechamento":96.125,"variacao":"0.6","minimo":94698,"maximo":97.11,"volume":"27,85B", id:1},
      {"data":"06/17/2020","abertura":93531,"fechamento":95.547,"variacao":"2.16","minimo":93531,"maximo":96611,"volume":"30,33B", id:1},
      {"data":"06/16/2020","abertura":92387,"fechamento":93.531,"variacao":"1.25","minimo":92387,"maximo":95216,"volume":"n/d", id:1},
      {"data":"06/15/2020","abertura":92.782,"fechamento":92.376,"variacao":"-0.45","minimo":90148,"maximo":93112,"volume":"42,92B", id:1},
      {"data":"06/12/2020","abertura":94677,"fechamento":92.795,"variacao":"-2","minimo":90811,"maximo":94703,"volume":"35,60B", id:1},
      {"data":"06/10/2020","abertura":96747,"fechamento":94.686,"variacao":"-2.13","minimo":94665,"maximo":97646,"volume":"33,77B", id:1},
      {"data":"06/09/2020","abertura":97644,"fechamento":96.747,"variacao":"-0.92","minimo":95386,"maximo":97644,"volume":"31,41B", id:1}
  ]


  constructor(
    private _http: HttpClient,
    private _config: Configuration
  ) {
    super();
  }

  public getDataStockExchange(): Observable<IibovespaDatas[]> {
    return new Observable(obs => {
      let data : Array<IibovespaDatas> = this.data;
      obs.next(data);
    })
    // return this._http.get<any>( this._config.environment.API.ibovesta.base_url )
    // .pipe(
    //   timeout(30000),
    //   map(res  => {
    //     console.log(res);

    //     return res.bovespa as Array<IibovespaDatas>;
    //   })
    // )
  }
}
