import {HttpHeaders} from "@angular/common/http";

export class BaseSerive {
  constructor() {

  }

  protected _getHeaders(): HttpHeaders{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }
}
