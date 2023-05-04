import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import defaultEnLanguage from '../shared/i18n/en.json';
import defaultRoLanguage from '../shared/i18n/ro.json';

enum ViewState {
  HOME,
  FORM,
  LOADING,
  RESULT,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  viewState = ViewState;

  currentViewState = this.viewState.HOME;

  language = 'en';

  currentQuestionIndex = 0;
  maxQuestions = 6;
  onlyTwoAnswerQuestions = [4];

  savedAnswer = -1;
  savedAnswers: number[] = [-1, -1, -1, -1, -1, -1];

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
    if (
      this.currentViewState === this.viewState.HOME ||
      this.currentViewState === this.viewState.LOADING
    )
      return;
    this.currentViewState = this.viewState.HOME;
    this.currentQuestionIndex = 0;
    this.savedAnswer = -1;
    this.savedAnswers = [-1, -1, -1, -1, -1, -1];
  }

  createTemplate() {
    this.currentViewState = this.viewState.FORM;
  }

  goBack() {
    if (
      this.currentQuestionIndex === 0 ||
      this.currentQuestionIndex > this.maxQuestions
    )
      return;
    this.currentQuestionIndex -= 1;
    this.savedAnswer = this.savedAnswers[this.currentQuestionIndex];
    console.log('index ' + this.currentQuestionIndex);
  }

  goNext() {
    if (
      this.savedAnswer === -1 ||
      this.savedAnswers[this.currentQuestionIndex] === -1 ||
      this.currentQuestionIndex === this.maxQuestions - 1
    )
      return;
    console.log(this.currentQuestionIndex + ' ' + this.maxQuestions);
    this.currentQuestionIndex += 1;
    this.savedAnswer = this.savedAnswers[this.currentQuestionIndex];
  }

  saveAnswer(index: number) {
    if (this.savedAnswer === index) {
      this.savedAnswer = -1;
      this.savedAnswers[this.currentQuestionIndex] = -1;
      return;
    }
    this.savedAnswer = index;
    this.savedAnswers[this.currentQuestionIndex] = this.savedAnswer;
    console.log(`index: ${index}`);
  }

  finish() {
    if (this.savedAnswers.some((el) => el === -1)) return;

    console.log('finish');
    this.currentViewState = this.viewState.LOADING;
    setTimeout(() => {
      this.currentViewState = this.viewState.RESULT;
    }, 3500);
  }

  canFinish() {
    return this.savedAnswers.some((el) => el === -1);
  }

  showQuestion() {
    return !this.onlyTwoAnswerQuestions.includes(this.currentQuestionIndex);
  }
}
