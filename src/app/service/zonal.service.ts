import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Zonal } from '../models/zonal.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ZonalService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/zonal';

  /*
   * Get the list of zone using get method in json format
   */
  public getZonal() {
    // console.log(this.apiUrl);
    return this.http.get<Zonal[]>(this.apiUrl+"/list");
  }

  public deleteZone(zone) {
    return this.http.delete(this.apiUrl + "/delete/"+ zone.id);
  }

  public createZone(zone) {
    return this.http.post<Zonal>(this.apiUrl+"/add-zonal", zone);
  }

  public updateZone(zone) {
    return this.http.put<Zonal>(this.apiUrl+"/update/"+ zone.id, zone);
  }

}