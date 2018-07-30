import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PickListValue } from '../models/picklistvalue.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PickListValueService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/pick-list-value';

  /*
   * Get the list of zone using get method in json format
   */
  public getPickListValue() {
    return this.http.get<PickListValue[]>(this.apiUrl+"/list");
  }

  public deletePickListValue(pickListValue) {
    return this.http.delete(this.apiUrl + "/delete/"+ pickListValue.id);
  }

  public createPickListValue(pickListValue) {
    return this.http.post<PickListValue>(this.apiUrl+"/add-pick-list", pickListValue);
  }

  public updatePickListValue(pickListValue) {
    return this.http.put<PickListValue>(this.apiUrl+"/update/"+ pickListValue.id, pickListValue);
  }

  public getParentList(id) {
    return this.http.get<PickListValue[]>(this.apiUrl+"/list-parent/"+id);
  }

  public getChildList(id) {
    return this.http.get<PickListValue[]>(this.apiUrl+"/list-child/"+id);
  }
}