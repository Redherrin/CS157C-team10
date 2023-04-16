import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from './article';
import { ARTICLES } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]>{
    const articles =  of(ARTICLES);
    return articles;
  }

  getArticle(id: number): Observable<Article>{
    const article =  ARTICLES.find( a => a.id === id)!;
    return of(article);

  }
}
