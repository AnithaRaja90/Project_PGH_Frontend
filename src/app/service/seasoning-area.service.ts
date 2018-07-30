import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SeasoningArea } from '../models/seasoning-area.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SeasoningAreaService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/seasoning-area';

  /*
   * Get the list of seasoning area using get method in json format
   */
  public getAllRecord() {
    // console.log(this.apiUrl);
    return this.http.get<SeasoningArea[]>(this.apiUrl+"/list");
  }

  public delete(data) {
    return this.http.delete(this.apiUrl + "/delete/"+ data.id);
  }

  public create(data) {
    return this.http.post<SeasoningArea>(this.apiUrl+"/add-seasoning-area", data);
  }

  public update(data) {
    return this.http.put<SeasoningArea>(this.apiUrl+"/update/"+ data.id, data);
  }
}