import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './home-article-list.component.html',
  styleUrls: ['./home-article-list.component.css']
})
export class HomeArticleListComponent implements OnInit{
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void{
    this.getArticles();
  }

  getArticles(): void{
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }
}