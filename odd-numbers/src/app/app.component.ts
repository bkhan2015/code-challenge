import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr: Array<number>;
  oddarr: Array<number>;

  constructor() {
    this.arr = [10, 20, 31, 41];
    this.oddarr = [];
  }

  ngOnInit() {
    this.oddarr = this.arr.filter(value => {
      return value % 2 !== 0;
    });
  }
}
