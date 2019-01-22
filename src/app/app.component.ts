import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor () {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 4),
      new Article('Fullstack', 'http://fullstack.io', 4),
      new Article('Angular HomePage', 'http://angular.io', 1)
    ];
  }

  addArticle (title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    console.log(`Title: ${title.value} ||| Link: ${link.value}`);
    console.log(title);
    return false;
  }
}
