import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUtil} from '../util/api.util';
import URL_CONFIG from "../../url.config";
import {Observable} from "rxjs";
import {map} from "rxjs/internal/operators";
import {Inventory} from "../model/inventory.model";

@Injectable()
export class InventoryService {
  constructor(private http: HttpClient, public apiUtil: ApiUtil) {}

  public getInventory(): Observable<Array<Inventory>> {
    return this.http.get<Array<Inventory>>(URL_CONFIG.GET_INVENTORY, { headers:
        this.apiUtil.getHttpHeaders()}).pipe(
      map(result => result)
    );
  }
}
