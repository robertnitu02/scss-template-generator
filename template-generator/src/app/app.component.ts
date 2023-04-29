import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import defaultEnLanguage from '../shared/i18n/en.json';
import defaultRoLanguage from '../shared/i18n/ro.json';

enum ViewState {
  HOME,
  FORM,
  RESULT,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  viewState = ViewState;

  language = 'en';
  currentViewState = this.viewState.HOME;

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', defaultEnLanguage);
    translate.setTranslation('ro', defaultRoLanguage);
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {}

  changeLanguage() {
    this.language = this.language == 'ro' ? 'en' : 'ro';
    this.translate.use(this.language);
  }

  goHome() {
    if (this.currentViewState === this.viewState.HOME) return;
    this.currentViewState = this.viewState.HOME;
  }

  createTemplate() {
    this.currentViewState = this.viewState.FORM;
  }
}
