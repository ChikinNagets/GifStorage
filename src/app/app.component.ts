import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
import { IGifs } from './config/IGifs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor (private AppService: AppService) {}
  
  trendingGifs = {};
  title = 'GifStorage';

  ngOnInit() {
    this.trendingGifs = this.AppService.getTrendingGifs()
  }
}
