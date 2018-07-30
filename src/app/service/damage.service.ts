import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Damage } from '../models/damage.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DamageService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/damage';

  /*
   * Get the list of damage using get method in json format
   */
  public getDamage() {
    // console.log(this.apiUrl);
    return this.http.get<Damage[]>(this.apiUrl+"/list");
  }

  public deleteDamage(damage) {
    return this.http.delete(this.apiUrl + "/delete/"+ damage.id);
  }

  public createDamage(damage) {
    return this.http.post<Damage>(this.apiUrl+"/add-damage", damage);
  }

  public updateDamage(damage) {
    return this.http.put<Damage>(this.apiUrl+"/update/"+ damage.id, damage);
  }
}