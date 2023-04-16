import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

import { Article } from '../article';
import { ArticleService } from '../article.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void{
    this.getArticle();
  }

  getArticle(): void{
    const id =  Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }
}
