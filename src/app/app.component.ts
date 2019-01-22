import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  addArticle (title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Title: ${title.value} ||| Link: ${link.value}`);
    console.log(title);
    return false;
  } 
}
