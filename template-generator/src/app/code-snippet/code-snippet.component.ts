import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CodeHighlight } from 'clarity-angular';

@Component({
  selector: 'code-snippet',
  template: `<pre><code [clr-code-highlight]="'language-'+language">{{code.trim()}}</code></pre>`,
  styles: [
    `
      pre {
        background: transparent;
        padding: 12px;
      }
    `,
  ],
})
export class CodeSnippetComponent implements AfterViewInit {
  @ViewChild(CodeHighlight) codeHighlight: CodeHighlight | undefined;

  @Input('code') public code: string | undefined;
  @Input('language') public language: string = 'html';

  ngAfterViewInit(): void {
    if (this.codeHighlight) {
      this.codeHighlight.redraw();
    }
  }
}
