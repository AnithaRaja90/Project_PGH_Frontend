import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Batch } from '../models/batch.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BatchService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/batch';

  /*
   * Get the list of batch using get method in json format
   */
  public getBatch() {
    // console.log(this.apiUrl);
    return this.http.get<Batch[]>(this.apiUrl+"/list");
  }

  public deleteBatch(batch) {
    return this.http.delete(this.apiUrl + "/delete/"+ batch.id);
  }

  public createBatch(batch) {
    return this.http.post<Batch>(this.apiUrl+"/add-batch", batch);
  }

  public updateBatch(batch) {
    return this.http.put<Batch>(this.apiUrl+"/update/"+ batch.id, batch);
  }
}