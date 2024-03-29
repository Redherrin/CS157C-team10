import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';
import { Comment } from '../models/comment';
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

  updateArticle(id: String, article: Article): Observable<Article>{
    article.lastUpdatedDate = new Date().toISOString();
    return this.http.put<Article>(`${this.articleUrl}/update/${id}`, article);
  }

  addComment(id: String, comment: Comment): Observable<Article>{
    comment.date = new Date().toISOString();
    return this.http.put<Article>(`${this.articleUrl}/comment/${id}`, comment);
  }

  deleteArticle(id: String): Observable<Article>{
    //const article =  ARTICLES.find( a => a.id === id)!;
    //return of(article);
    return this.http.delete<Article>(`${this.articleUrl}/delete/${id}`);
  }

  getArticleByKeyword(searchString: String): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.articleUrl}/search/${searchString}`);
  }
}
