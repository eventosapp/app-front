import { Component, AfterViewInit } from '@angular/core';

declare function startTemplate(): any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    startTemplate();
  }
}
