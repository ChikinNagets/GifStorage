import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor (private AppService: AppService) {}

  title = 'GifStorage';

  ngOnInit() {
    this.AppService.getTrendingGifs();
  }
}
