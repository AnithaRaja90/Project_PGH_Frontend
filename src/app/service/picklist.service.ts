import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PickList } from '../models/picklist.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  responseType: 'text'
};

@Injectable()
export class PickListService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/pick-list';

  /*
   * Get the list of zone using get method in json format
   */
  public getPickList() {
    return this.http.get<PickList[]>(this.apiUrl+"/list");
  }

  public deletePickList(picklist) {
    return this.http.delete(this.apiUrl + "/delete/"+ picklist.id);
  }

  public createPickList(picklist) {
    return this.http.post<PickList>(this.apiUrl+"/add-pick-list", picklist);
  }

  public updatePickList(picklist) {
    return this.http.put<PickList>(this.apiUrl+"/update/"+ picklist.id, picklist);
  }

}