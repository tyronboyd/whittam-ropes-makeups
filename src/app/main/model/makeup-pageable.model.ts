import {Makeup} from "./makeup.model";

export class MakeupPageableModel {
  public content: Array<Makeup> = new Array<Makeup>();
  public first: boolean;
  public last: boolean;
  public number: number;
  public numberOfElements: number;
  public size: number;
  public totalElements: number;
}
