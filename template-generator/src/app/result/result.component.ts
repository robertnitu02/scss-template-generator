import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() results: number[] = [];
  source: string = `
  import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
    import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
    import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
    import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
    import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }`;
  ngOnInit(): void {
    console.log(this.results);
  }
}
