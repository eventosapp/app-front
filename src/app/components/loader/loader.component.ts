import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor() {

  }

  public isShow = true;

  public show(): void {
    this.isShow = true;
    this.overflowScrollBar('hidden');
  }

  public hidden(): void {
    this.isShow = false;
    this.overflowScrollBar("auto");
  }

  private overflowScrollBar(value: "hidden" | "auto"): void {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = value;
    }
  }
}
