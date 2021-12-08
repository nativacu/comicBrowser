import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comic} from "../models/comic";
import {Request} from "../models/request";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'http://localhost:4200/api/';
  apiKey = 'ea08914dfc0a4f25c4500e5f68c479d5ce720a1d';
  constructor(private http: HttpClient) { }

  getComics() {
    return this.http.get<Request>(`${this.configUrl}issues/?api_key=${this.apiKey}&format=json`);
  }
}
