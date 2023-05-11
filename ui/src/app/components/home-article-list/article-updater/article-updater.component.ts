import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Chunk } from 'src/app/models/chunk';
import { CreateFormComponent } from '../../create-form/create-form.component';

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
    chunks: [],
    comments: []
  };

  @ViewChild('createForm') createForm?: CreateFormComponent;

  id?: string;

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    public createFormComponent: CreateFormComponent
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(this.id).subscribe(article => {
      console.log("article: " + article);
      // let chunks = [];
      // this.createForm!.form.get('chunks')?.setValue(chunks);

      // console.log(chunks);
      // let test = this.createForm?.getTextForm();
      // chunks?.push(test);
      // console.log(chunks);

      let formChunks = this.createForm?.getChunks();
      for (var chunk of article.chunks) {
        if (chunk.type == 'text') {
          formChunks?.push(this.createForm?.getTextForm());
        } else if (chunk.type == 'media') {
          formChunks?.push(this.createForm?.getMediaForm());
          formChunks?.at(formChunks.length-1).patchValue(
            {
              file: chunk.data.filename
            }
          );
        }
      }
      Object.keys(article).forEach(key => {
        // if (key !== 'chunks') {
          this.createForm!.form.get(key as keyof Article)?.setValue(article[key as keyof Article]);
          console.log(key as keyof Article);
        // }
      })
      
    });
  }

  onSubmit(data: FormGroup): void {
    let article: Article = {
      id: this.id!,
      userId: '',
      title: this.createForm?.form.controls.title.value!,
      subtitle: this.createForm?.form.controls.subtitle.value!,
      author: this.createForm?.form.controls.author.value!,
      // body: '',
      date: this.createForm?.form.controls.date.value?.toString()!,
      lastUpdatedDate: Date.now().toString(),
      chunks: this.createForm?.form.controls.chunks.value! as Chunk[],
      comments: []
    };
    // article = data.value;
    console.log("SUBMIT ARTICLE");
    console.log(article);
    this.articleService.updateArticle(article.id, article).subscribe(()=>{this.router.navigate([`/read/${article.id}`]);});
    
  }
}
