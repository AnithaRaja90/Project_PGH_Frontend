import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ShadeArea } from '../models/shade-area.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShadeAreaService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/shade-area';

  /*
   * Get the list of seasoning area using get method in json format
   */
  public getAllRecord() {
    // console.log(this.apiUrl);
    return this.http.get<ShadeArea[]>(this.apiUrl+"/list");
  }

  public delete(data) {
    return this.http.delete(this.apiUrl + "/delete/"+ data.id);
  }

  public create(data) {
    return this.http.post<ShadeArea>(this.apiUrl+"/move-to-shade-area", data);
  }

  public update(data) {
    return this.http.put<ShadeArea>(this.apiUrl+"/update/"+ data.id, data);
  }
}