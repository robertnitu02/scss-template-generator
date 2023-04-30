import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  dots = '.';
  dotsInterval: number | undefined = undefined;

  ngOnInit(): void {
    this.dotsInterval = setInterval(() => {
      this.dots += '.';
      if (this.dots.length === 4) this.dots = '.';
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.dotsInterval) {
      clearInterval(this.dotsInterval);
      this.dotsInterval = undefined;
    }
  }
}
