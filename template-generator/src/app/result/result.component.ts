import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() results: number[] = [];
  code = `.wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`;

  ngOnInit(): void {
    console.log(this.results);
  }
}
