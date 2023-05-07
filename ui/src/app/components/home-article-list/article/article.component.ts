import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';

import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';
import { Chunk } from 'src/app/models/chunk';
import { TextChunk } from 'src/app/models/text-chunk';
import { MediaChunk } from 'src/app/models/media-chunk';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  article: Article = {
    id: '',
    userId: '',
    title: '',
    subtitle: '',
    author: '',
    body: '',
    date: '',
    lastUpdatedDate: '',
    chunks: []
  };
  textChunks: TextChunk[] = [];
  mediaChunks: MediaChunk[] = [];
  // chunkOrder?: string[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void{
    this.getArticle();
  }

  getArticle(): void{
    const id =  String(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id)
      .subscribe(
        article =>{
          this.article = article;
          console.log("Article: " + JSON.stringify(article.chunks));
          for (let chunk of article.chunks) {
            console.log("chunk " + JSON.stringify(chunk));
            console.log(chunk.type)
            console.log("chunk data " + JSON.stringify(chunk.data));
            if (chunk.data.type == 'text') {
              console.log('text: ' + chunk.data);
              // this.textChunks.push(chunk.data);
            } else if (chunk.data.type == 'media') {
              console.log('media: ' + chunk.data);
              // this.mediaChunks.push(chunk.data);
            }
            

          }
          // this.textChunks.reverse();
          // this.mediaChunks.reverse();
          // console.log("Textchunks " + this.textChunks);
        } );
    console.log(this.article?.lastUpdatedDate);
  }
}
