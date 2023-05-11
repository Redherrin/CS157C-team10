import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/Router';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Chunk } from 'src/app/models/chunk';
import { CreateFormComponent } from '../../create-form/create-form.component';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent {
@ViewChild('createForm') createForm?: CreateFormComponent;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  onSubmit(data: FormGroup): void {
    // this.articleService.createArticle(this.article)
    //   .subscribe(savedArticle => {
    //     this.article = savedArticle;
    //     this.router.navigate(['/home']);
    //   });
    console.log(data);

    let article: Article = {
      id: '',
      userId: '',
      title: this.createForm?.form.controls.title.value!,
      subtitle: this.createForm?.form.controls.subtitle.value!,
      author: '',
      // body: '',
      date: Date.now.toString(),
      lastUpdatedDate: '',
      chunks: this.createForm?.form.controls.chunks.value! as Chunk[],
      comments: []
    };
    this.articleService.createArticle(article).subscribe();
    this.router.navigate(['/home']);
  }
}
