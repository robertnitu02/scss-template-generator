import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import defaultEnLanguage from '../shared/i18n/en.json';
import defaultRoLanguage from '../shared/i18n/ro.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  language = 'en';

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', defaultEnLanguage);
    translate.setTranslation('ro', defaultRoLanguage);
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    console.log(1);
  }

  changeLanguage() {
    this.language = this.language == 'ro' ? 'en' : 'ro';
    this.translate.use(this.language);
  }
}
