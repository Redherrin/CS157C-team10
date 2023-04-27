import { Component } from '@angular/core';
import { Router } from '@angular/Router';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  
  articles: Article[] = [];
  article: Article = {
    id: '',
    userId: '',
    title: '',
    date: '',
    lastUpdatedDate: '',
    author: '',
    body: ''
  };

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void{}

  saveArticle(): void {
    this.articleService.createArticle(this.article)
      .subscribe(savedArticle => {
        this.article = savedArticle;
        this.router.navigate(['/home']);
      });
  }

}
