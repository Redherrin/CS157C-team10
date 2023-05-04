import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './home-article-list.component.html',
  styleUrls: ['./home-article-list.component.css']
})
export class HomeArticleListComponent implements OnInit{
  articles: Article[] = [];
  article: Article = {
    id: '',
    userId: '',
    title: '',
    subtitle: '',
    date: '',
    lastUpdatedDate: '',
    author: '',
    body: ''
  };

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.getArticles();
  }

  getArticles(): void{
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles.reverse());
  }

  saveArticle(): void {
    this.articleService.createArticle(this.article)
      .subscribe(savedArticle => {
        this.article = savedArticle;
        this.getArticles();
      });
  }

  updateArticle(id: String): void{
    this.router.navigate(['/update', id]);
  }

  deleteArticle(id: String): void{
    if(window.confirm('Are you sure you want to delete this article?')){
      this.articles = this.articles.filter(tempArticle => tempArticle.id !== id);
      this.articleService.deleteArticle(id).subscribe();
    }
  }

  onSubmit(searchString: String): void{
      this.router.navigate(['/search', searchString]);
  }
}
