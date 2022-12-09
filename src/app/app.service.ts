import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGifs } from './config/IGifs'
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://api.giphy.com/v1/gifs/trending?api_key=wE0OcgM59jxYSN5bfKtTe9a4Z9frCaVC&limit=25&rating=g';
  gifs: IGifs;

  getTrendingGifs() {
    return this.http.get<any>(this.rootURL).pipe(
      tap(respObj => {
          this.gifs = respObj.data
          console.log(this.gifs)
      })
  );
  }
}
