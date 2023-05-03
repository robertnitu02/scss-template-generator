import { Component, Input, OnInit } from '@angular/core';

enum CATEGORY {
  COLORS,
  NAVBAR,
  FOOTER,
  CONTENT,
  STYLE,
  FONT,
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() results: number[] = [];
  sourceHtml: string = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <title>Presentation Website</title>
    </head>
    <body>
        <div class="app">`;

  sourceCss: string = `html, body {
        height: 100%;
        overflow: hidden;
    }

    body {
        overflow: hidden;
        user-select: none;
        margin: 0;
        font-family: Mulish, "Helvetica Neue", sans-serif !important;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
    }

    .app {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-rows: 5% 90% 5%;
    }`;

  ngOnInit(): void {
    this.generateTemplate();
  }

  generateTemplate() {
    let colorNavbarClassHtml;
    let colorContentClassHtml;
    let colorFooterClassHtml;
    let colorBoxClassHtml;
    let colorsCodeCss = '';
    if (this.results[CATEGORY.COLORS] === 0) {
      colorNavbarClassHtml = 'cool-navbar';
      colorContentClassHtml = 'cool-content';
      colorFooterClassHtml = 'cool-footer';
      colorBoxClassHtml = 'box-cool';
      colorsCodeCss = `/* Cool */
        .cool-navbar {
            background: linear-gradient(95.2deg, rgb(173, 252, 234) 26.8%, rgb(192, 229, 246) 64%);
        }

        .cool-content {
            background: linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%);
        }

        .cool-footer {
            background: linear-gradient(95.2deg, rgb(173, 252, 234) 26.8%, rgb(192, 229, 246) 64%);
        }

        .box-cool {
            background: linear-gradient(95.2deg, rgb(51, 186, 154) 26.8%, rgb(55, 133, 169) 64%);
        }`;
    } else if (this.results[CATEGORY.COLORS] === 1) {
      colorNavbarClassHtml = 'light-cool-navbar';
      colorContentClassHtml = 'light-cool-content';
      colorFooterClassHtml = 'light-cool-footer';
      colorBoxClassHtml = 'box-light-cool';
      colorsCodeCss = `/* Light Cool */
        .light-cool-navbar {
            background: linear-gradient(65.5deg, rgb(23, 205, 205) -15.1%, rgb(23, 25, 95) 71.5%);
        }

        .light-cool-content {
            background: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
        }

        .light-cool-footer {
            background: linear-gradient(65.5deg, rgb(23, 205, 205) -15.1%, rgb(23, 25, 95) 71.5%);
        }

        .box-light-cool {
            background: linear-gradient(65.5deg, rgb(17, 238, 238) -15.1%, rgb(22, 26, 145) 71.5%);
        }`;
    } else if (this.results[CATEGORY.COLORS] === 2) {
      colorNavbarClassHtml = 'warm-navbar';
      colorContentClassHtml = 'warm-content';
      colorFooterClassHtml = 'warm-footer';
      colorBoxClassHtml = 'box-warm';
      colorsCodeCss = `/* Warm */
        .warm-navbar {
            background: radial-gradient(755px at 10.1% 95.3%, rgb(242, 188, 141) 0%, rgb(242, 159, 141) 100.2%);
        }

        .warm-content {
            background: linear-gradient(110.3deg, rgb(238, 179, 123) 8.7%, rgb(216, 103, 77) 47.5%, rgb(114, 43, 54) 89.1%);
        }

        .warm-footer {
            background: radial-gradient(755px at 10.1% 95.3%, rgb(242, 188, 141) 0%, rgb(242, 159, 141) 100.2%);
        }

        .box-warm {
            background: radial-gradient(755px at 10.1% 95.3%, rgb(239, 149, 70) 0%, rgb(242, 97, 65) 100.2%);
        }`;
    } else if (this.results[CATEGORY.COLORS] === 3) {
      colorNavbarClassHtml = 'light-warm-navbar';
      colorContentClassHtml = 'light-warm-content';
      colorFooterClassHtml = 'light-warm-footer';
      colorBoxClassHtml = 'box-light-warm';
      colorsCodeCss = `/* Light Warm */
        .light-warm-navbar {
            background: linear-gradient(108.7deg, rgb(224, 235, 213) 8.1%, rgb(37, 148, 141) 91.2%);
        }

        .light-warm-content {
            background: radial-gradient(939px at 94.7% 50%, rgb(0, 178, 169) 0%, rgb(0, 106, 101) 76.9%);
        }

        .light-warm-footer {
            background: linear-gradient(108.7deg, rgb(224, 235, 213) 8.1%, rgb(37, 148, 141) 91.2%);
        }

        .box-light-warm {
            background: linear-gradient(108.7deg, rgb(188, 241, 136) 8.1%, rgb(31, 180, 170) 91.2%);
        }`;
    }

    let navbarClassHtml = `navbar-${this.results[CATEGORY.NAVBAR] + 2}`;
    let footerClassHtml = `footer-${this.results[CATEGORY.FOOTER] + 1}`;
    let modernClassHtml = this.results[CATEGORY.STYLE] === 0 ? 'modern' : '';
    if (this.results[CATEGORY.STYLE] === 0)
      this.sourceCss += `.modern { border-radius: 2%; }`;

    let navbarCodeHtml = '';
    let navbarCodeCss = '';
    if (this.results[CATEGORY.NAVBAR] === 0) {
      navbarCodeHtml = `<div class="${navbarClassHtml} ${colorNavbarClassHtml}">
            <span>dsadsadsa</span>
            <span></span>
            <span>dsadsadsa</span>
        </div>`;
      navbarCodeCss = `.navbar-2 {
          display: grid;
          grid-template-columns: 10% 80% 10%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.NAVBAR] === 1) {
      navbarCodeHtml = `<div class="${navbarClassHtml} ${colorNavbarClassHtml}">
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
            <span></span>
            <span>dsadsadsa</span>
        </div>`;
      navbarCodeCss = `.navbar-3 {
          display: grid;
          grid-template-columns: 10% 10% 70% 10%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.NAVBAR] === 2) {
      navbarCodeHtml = `<div class="${navbarClassHtml} ${colorNavbarClassHtml}">
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
            <span></span>
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
        </div>`;
      navbarCodeCss = `.navbar-4 {
          display: grid;
          grid-template-columns: 10% 10% 60% 10% 10%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.NAVBAR] === 3) {
      navbarCodeHtml = `<div class="${navbarClassHtml} ${colorNavbarClassHtml}">
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
            <span></span>
            <span>dsadsadsa</span>
            <span>dsadsadsa</span>
        </div>`;
      navbarCodeCss = `.navbar-5 {
          display: grid;
          grid-template-columns: 10% 10% 10% 50% 10% 10%;
          background-color: red;
      }`;
    }
    this.sourceHtml += navbarCodeHtml;
    this.sourceCss += navbarCodeCss;

    this.sourceCss += `.content {
        display: grid;
        place-items: center;
    }

    .box {
        width: 1080px;
        height: 750px;
    }`;

    let contentCodeHtml = '';
    let contentCssCode = '';
    if (this.results[CATEGORY.CONTENT] === 0) {
      contentCodeHtml =
        `<div class="content ${colorContentClassHtml}">\n` +
        `<div class="box airy ${colorBoxClassHtml} ${modernClassHtml}">\n` +
        `                <span class="airy-left-mid"> LEFT</span>\n` +
        `                <span class="airy-right-p1"> RIGHT 1</span>\n` +
        `                <span class="airy-right-p2"> RIGHT 2</span>\n` +
        `            </div>`;
      `</div>`;
      contentCssCode = `.airy {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr;
      }

      .airy-left-mid {
          display: grid;
          text-align: center;
          align-items: center;
          grid-row: 1 / span 2;
          grid-column: 1;
      }

      .airy-right-p1 {
          display: grid;
          text-align: center;
          align-items: center;
          grid-row: 1;
          grid-column: 2;
      }

      .airy-right-p2 {
          display: grid;
          text-align: center;
          align-items: center;
          grid-row: 2 / span 3;
          grid-column: 2;
      }`;
    } else if (this.results[CATEGORY.CONTENT] === 1) {
      contentCodeHtml = `<div class="content ${colorContentClassHtml}">
        <div class="box compact ${colorBoxClassHtml}  ${modernClassHtml}">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>`;
      contentCssCode = `.compact {
          display: grid;
          text-align: center;
          align-items: center;
          grid-template-rows: 1fr 1fr 1fr;
      }`;
    } else if (this.results[CATEGORY.CONTENT] === 2) {
      contentCodeHtml = `<div class="content ${colorContentClassHtml}">
        <div class="box full ${colorBoxClassHtml}  ${modernClassHtml}">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </div>
        </div>`;
      contentCssCode = `.full {
          display: grid;
          align-items: center;
          text-align: center;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr;
      }`;
    } else if (this.results[CATEGORY.CONTENT] === 3) {
      contentCodeHtml = `<div class="content ${colorContentClassHtml}">
        <div class="box mixed ${colorBoxClassHtml} ${modernClassHtml}">
                <span class="left-two-columns ${modernClassHtml}">1</span>
                <span>2</span>
                <span>3</span>
                <span>3</span>
                <span>3</span>
                <span>3</span>
            </div>
        </div>`;
      contentCssCode = `.mixed {
          display: grid;
          text-align: center;
          align-items: center;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
      }

      .left-two-columns {
          display: grid;
          width: 100%;
          height: 100%;
          text-align: center;
          align-items: center;
          grid-row: 1 / span 2;
          grid-column: 1 / span 2;
          border: 2px solid black;
      }`;
    }
    this.sourceHtml += contentCodeHtml;
    this.sourceCss += contentCssCode;

    let footerCodeHtml = '';
    let footerCssCode = '';
    if (this.results[CATEGORY.FOOTER] === 0) {
      footerCodeHtml = `<div class="${footerClassHtml} ${colorFooterClassHtml}">
            <span></span>
            <span>3</span>
            <span></span>
        </div>`;
      footerCssCode = `.footer-1 {
          display: grid;
          grid-template-columns: 40% 20% 40%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.FOOTER] === 1) {
      footerCodeHtml = `<div class="${footerClassHtml} ${colorFooterClassHtml}">
            <span></span>
            <span>3</span>
            <span>3</span>
            <span></span>
        </div>`;
      footerCssCode = `.footer-2 {
          display: grid;
          grid-template-columns: 40% 10% 10% 40%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.FOOTER] === 2) {
      footerCodeHtml = `<div class="${footerClassHtml} ${colorFooterClassHtml}">
            <span></span>
            <span>3</span>
            <span>3</span>
            <span>3</span>
            <span></span>
        </div>`;
      footerCssCode = `.footer-3 {
          display: grid;
          grid-template-columns: 35% 10% 10% 10% 35%;
          background-color: red;
      }`;
    } else if (this.results[CATEGORY.FOOTER] === 3) {
      footerCodeHtml = `<div class="${footerClassHtml} ${colorFooterClassHtml}">
            <span></span>
            <span>3</span>
            <span>3</span>
            <span>3</span>
            <span>3</span>
            <span></span>
        </div>`;
      footerCssCode = `.footer-4 {
          display: grid;
          grid-template-columns: 30% 10% 10% 10% 10% 30%;
          background-color: red;
      }`;
    }
    this.sourceHtml += footerCodeHtml;
    this.sourceCss += footerCssCode;

    let finalCodeHtml = `</div>
      </body>
      </html>`;
    this.sourceHtml += finalCodeHtml;

    let fontCodeCss = '';
    if (this.results[CATEGORY.FONT] === 0) {
      fontCodeCss = `span {
          font-family: 'Verdana';
      }`;
    } else if (this.results[CATEGORY.FONT] === 1) {
      fontCodeCss = `span {
          font-family: 'Franklin Gothic Medium';
      }`;
    } else if (this.results[CATEGORY.FONT] === 2) {
      fontCodeCss = `span {
          font-family: 'Courier New';
      }`;
    } else if (this.results[CATEGORY.FONT] === 3) {
      fontCodeCss = `span {
          font-family: 'Lucida Sans';
      }`;
    }

    this.sourceCss += colorsCodeCss;
    this.sourceCss += fontCodeCss;
  }
}
