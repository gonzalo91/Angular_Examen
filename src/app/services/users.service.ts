import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient : HttpClientService) { }


  getAll(){
    return this._httpClient.get('');
  }
}
