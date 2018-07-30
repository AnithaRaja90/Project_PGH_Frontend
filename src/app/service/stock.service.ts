import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stock } from '../models/stock.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StockService {

  constructor(private http:HttpClient) {}
  
	private apiUrl = '/api/stock';

  /*
   * Get the list of stock using get method in json format
   */
  public getStock() {
    // console.log(this.apiUrl);
    return this.http.get<Stock[]>(this.apiUrl+"/list");
  }

  public deleteStock(stock) {
    return this.http.delete(this.apiUrl + "/delete/"+ stock.id);
  }

  public createStock(stock) {
    return this.http.post<Stock>(this.apiUrl+"/add-stock", stock);
  }

  public updateStock(stock) {
    return this.http.put<Stock>(this.apiUrl+"/update/"+ stock.id, stock);
  }
}