import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

export class ApiUtil {

  public handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

  public getHttpHeaders(): HttpHeaders {
    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Access-Control-Allow-Origin', '*');
    return httpHeaders;
  }
}
