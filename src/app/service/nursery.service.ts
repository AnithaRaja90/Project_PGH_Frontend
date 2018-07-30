import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Nursery } from '../models/nursery.model';
import { Sector } from '../models/sector.model';
import { Zonal } from '../models/zonal.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NurseryService {

  constructor(private http:HttpClient) {}
  
  private baseUrl = '/api';
	private apiUrl = this.baseUrl + "/nursery";

  /*
   * Get the list of nursery using get method in json format
   */
  public getNursery() {
    // console.log(this.apiUrl);
    return this.http.get<Nursery[]>(this.apiUrl+"/list");
  }

  public deleteNursery(nursery) {
    return this.http.delete(this.apiUrl + "/delete/"+ nursery.id);
  }

  public createNursery(nursery) {
    return this.http.post<Nursery>(this.apiUrl+"/add-nursery", nursery);
  }

  public updateNursery(nursery) {
    return this.http.put<Nursery>(this.apiUrl+"/update/"+ nursery.id, nursery);
  }

  public getZone() {
    return this.http.get<Zonal[]>(this.baseUrl+"/zonal/list");
  }

  public getSector(sectorId) {
    return this.http.get<Sector[]>(this.baseUrl+"/sector/get-zone-sectors/"+sectorId);
  }

  public getSectorNursery(sectorId) {
    return this.http.get<Nursery[]>(this.apiUrl+"/get-sector-nurserys/"+sectorId);
  }
}