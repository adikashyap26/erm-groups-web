import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl = 'http://localhost:3000'

  baseUrl = 'https://erm-backend-deploy-production.up.railway.app'

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(this.baseUrl + url)
  }

  post(url: string, data: any){
    return this.http.post(this.baseUrl + url, data)
  }


}
