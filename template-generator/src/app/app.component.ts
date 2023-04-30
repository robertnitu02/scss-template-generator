import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/models/question.model';

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

  currentViewState = this.viewState.FORM;
  questions: Question[] = [
    {
      id: 0,
      question: 'Ce faci',
      answers: ['r1', 'r2', 'r3', 'r4'],
    },
    {
      id: 1,
      question: 'Ce caci',
      answers: ['cac1', 'cac2', 'cac3', 'cac4'],
    },
    {
      id: 2,
      question: 'bine!',
      answers: ['ra', 'ra', 'ra', 'ra'],
    },
  ];

  language = 'en';
  showResults = false;
  currentQuestionIndex = 0;
  savedAnswer = -1;
  savedAnswers: number[] = [];

  constructor(private translate: TranslateService) {
    translate.setTranslation('en', defaultEnLanguage);
    translate.setTranslation('ro', defaultRoLanguage);
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    console.log(this.questions.length);
  }

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

  goBack() {
    if (
      this.currentQuestionIndex < 0 ||
      this.currentQuestionIndex > this.questions.length
    )
      return;
    this.currentQuestionIndex -= 1;
    console.log('index ' + this.currentQuestionIndex);
  }

  goNext() {
    if (this.savedAnswer === -1) return;
    console.log(this.currentQuestionIndex + ' ' + this.questions.length);
    this.currentQuestionIndex +=
      this.currentQuestionIndex < this.questions.length - 1 ? 1 : 0;
    if (this.currentQuestionIndex === this.questions.length - 1) {
      console.log('over');
      console.log(JSON.stringify(this.savedAnswers));
    }
    this.savedAnswer = -1;
  }

  saveAnswer(index: number) {
    if (this.savedAnswer === index) {
      this.savedAnswer = -1;
      return;
    }
    this.savedAnswer = index;
    this.savedAnswers[this.questions[this.currentQuestionIndex].id] =
      this.savedAnswer;
    console.log(`index: ${this.savedAnswer}`);
  }

  finish() {
    console.log(
      `${this.savedAnswers.length} | ${
        this.questions.length
      } | ${this.savedAnswers.some((el) => el !== null)}`
    );
    if (
      this.savedAnswers.length !== this.questions.length ||
      !this.savedAnswers.some((el) => el !== null)
    )
      return;

    console.log('finish');
    this.showResults = true;
  }
}
