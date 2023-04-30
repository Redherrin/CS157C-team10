import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/Router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  articles: Article[] = [];
  searchString: String = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.searchString = String(this.route.snapshot.paramMap.get('query'));
    this.getArticlesByKeyword();
  }

  getArticlesByKeyword(): void {
    this.articleService.getArticleByKeyword(this.searchString)
      .subscribe(articleMatches => {
        this.articles = articleMatches;
      });
    
  }

}
