import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private headers : HttpHeaders;

  constructor(private http : HttpClient) { 
       
  }

  
  get(url, options = {}) {    
    return this.http.get(environment.end_point + url, {      
      ...options,
    });
  }
 
}