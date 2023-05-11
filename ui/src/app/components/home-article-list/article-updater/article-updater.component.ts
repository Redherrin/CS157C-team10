import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-updater',
  templateUrl: './article-updater.component.html',
  styleUrls: ['./article-updater.component.css']
})

export class ArticleUpdaterComponent implements OnInit{

  article: Article = {
    id: '',
    userId: '',
    title: '',
    subtitle: '',
    date: '',
    lastUpdatedDate: '',
    author: '',
    body: '',
    chunks: [],
    comments: []
  };

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id).subscribe(article => {
      this.article = article;
      //this.articleForm.patchValue(article);
    });
  }

  updateArticle(): void {
    this.articleService.updateArticle(this.article.id, this.article)
      .subscribe(updatedArticle => {
        this.article = updatedArticle;
        this.router.navigate(['/home']);
      });
  }
}
