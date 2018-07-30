import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sector } from '../models/sector.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SectorService {

  constructor(private http:HttpClient) {}
  
  private apiUrl = "/api/sector";

  /*
   * Get the list of sector using get method in json format
   */
  public getSector() {
    return this.http.get<Sector[]>(this.apiUrl+"/list");
  }

  public deleteSector(sector) {
    return this.http.delete(this.apiUrl + "/delete/"+ sector.id);
  }

  public createSector(sector) {
    return this.http.post<Sector>(this.apiUrl+"/add-sector", sector);
  }

  public updateSector(sector) {
    return this.http.put<Sector>(this.apiUrl+"/update/"+ sector.id, sector);
  }
}