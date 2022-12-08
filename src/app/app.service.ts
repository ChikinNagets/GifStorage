import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://api.giphy.com/v1/gifs/trending?api_key=wE0OcgM59jxYSN5bfKtTe9a4Z9frCaVC&limit=25&rating=g';

  getTrendingGifs() {
    console.log('API call to get the most trending gifs');
    return this.http.get(this.rootURL);
  }
}
