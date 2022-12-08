import { Component } from '@angular/core';

@Component({
  selector: 'app-gifs-view',
  templateUrl: './gifs-view.component.html',
  styleUrls: ['./gifs-view.component.sass']
})
export class GifsViewComponent {
  trendingGifs = [];
}
