import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StockDetails } from '../models/stock-details.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockDetailsService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/stock-details';

  /*
   * Get the list of stock details using get method in json format
   */
  public getStockDetails() {
    // console.log(this.apiUrl);
    return this.http.get<StockDetails[]>(this.apiUrl+"/list");
  }

  public deleteStockDetails(stockDetails) {
    return this.http.delete(this.apiUrl + "/delete/"+ stockDetails.id);
  }

  public createStockDetails(stockDetails) {
    return this.http.post<StockDetails>(this.apiUrl+"/add-stock-details", stockDetails);
  }

  public updateStockDetails(stockDetails) {
    return this.http.put<StockDetails>(this.apiUrl+"/update/"+ stockDetails.id, stockDetails);
  }
}