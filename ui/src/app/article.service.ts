import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Article } from './article';
//import { ARTICLES } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl = 'http://localhost:8080/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    //const articles =  of(ARTICLES);
    //return articles;
    return this.http.get<Article[]>(this.articleUrl);
  }

  getArticle(id: String): Observable<Article>{
    //const article =  ARTICLES.find( a => a.id === id)!;
    //return of(article);
    return this.http.get<Article>(`${this.articleUrl}/${id}`);
  }

  createArticle(article: Article): Observable<Article>{
    article.date = new Date().toISOString();
    return this.http.post<Article>(`${this.articleUrl}/add`, article);
  }
}
