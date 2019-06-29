import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUtil} from '../util/api.util';
import {Makeup} from "../model/makeup.model";
import URL_CONFIG from "../../url.config";
import {Observable} from "rxjs";
import {map} from "rxjs/internal/operators";
import {MakeupSearchOptions} from "../model/MakeupSearchOptions";
import {MakeupPageableModel} from "../model/makeup-pageable.model";

@Injectable()
export class MakeupService {
  constructor(private http: HttpClient, public apiUtil: ApiUtil) {}

  public getAllMakeups(makeupSearchOptions: MakeupSearchOptions): Observable<MakeupPageableModel> {
    return this.http.post<MakeupPageableModel>(URL_CONFIG.GET_MAKEUPS, makeupSearchOptions, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

  public getMakeupsToExport(): Observable<Array<Makeup>> {
    return this.http.get<Array<Makeup>>(URL_CONFIG.GET_ALL_MAKEUPS, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

  public getMakeupById(id: string): Observable<Makeup> {
    return this.http.get<Makeup>(URL_CONFIG.GET_MAKEUP_BY_ID + '/' + id, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

  public saveMakeup(makeup: Makeup): Observable<Array<Makeup>> {
    return this.http.post<Array<Makeup>>(URL_CONFIG.SAVE_MAKEUP, makeup, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

  public saveAll(makeups: Array<Makeup>): Observable<Array<Makeup>> {
    return this.http.post<Array<Makeup>>(URL_CONFIG.GET_MAKEUPS, makeups, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

  public delete(makeupId: string): any {
    return this.http.delete(URL_CONFIG.GET_MAKEUPS + '/' + makeupId, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }

}
