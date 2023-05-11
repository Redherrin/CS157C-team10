import { Component } from '@angular/core';
import { Router } from '@angular/Router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Media } from 'src/app/models/media';
import { MediaService } from 'src/app/services/media.service';
import { Chunk } from 'src/app/models/chunk';
import { MediaChunk } from 'src/app/models/media-chunk';
import { TextChunk } from 'src/app/models/text-chunk';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  
  // articles: Article[] = [];
  // article: Article = {
  //   id: '',
  //   userId: '',
  //   title: '',
  //   subtitle: '',
  //   date: '',
  //   lastUpdatedDate: '',
  //   author: '',
  //   body: '',
  //   chunks: []
  // };

  form = this.fb.group({
    id: [''],
    userId: [''],
    title: ['', Validators.required],
    subtitle: [''],
    date: [Date.now()],
    lastUpdatedDate: [Date.now()],
    author: [''],
    chunks: this.fb.array([])
  });

  // textForm = this.fb.group({
  //   header: [''],
  //   body: ['', Validators.required],
  //   type: ['0']
  // });

  // mediaForm = this.fb.group({
  //   file: [null, Validators.required],
  //   source: ['', Validators.required],
  //   type: ['1']
  // });

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private fb: FormBuilder,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void{}

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
      title: this.form.controls.title.value!,
      subtitle: this.form.controls.subtitle.value!,
      author: '',
      date: Date.now.toString(),
      lastUpdatedDate: '',
      chunks: this.form.controls.chunks.value! as Chunk[],
      comments: []
    };
    this.articleService.createArticle(article).subscribe();
  }

  // onSubmit(data: FormGroup): void {
  //   // this.articleService.createArticle(this.article)
  //   //   .subscribe(savedArticle => {
  //   //     this.article = savedArticle;
  //   //     this.router.navigate(['/home']);
  //   //   });
  //   console.log(data);

  //   let article: Article = {
  //     id: '',
  //     userId: '',
  //     title: this.form.controls.title.value!,
  //     subtitle: this.form.controls.subtitle.value!,
  //     author: '',
  //     body: '',
  //     date: Date.now.toString(),
  //     lastUpdatedDate: '',
  //     chunks: this.form.controls.chunks.value! as Chunk[]
  //   };
  //   this.articleService.createArticle(article).subscribe();
  // }

  getChunks() {
    return this.form.controls["chunks"] as FormArray;
  }

  // getTextForm(header: string, body: string) :FormGroup {
  //   const textForm = this.fb.group({
  //     type: ['text'],
  //     data: this.fb.group({
  //       header: [header],
  //       body: [body, Validators.required],
  //       type: ['text']
  //     })
  //   });
  //   return textForm;
  // }

  getTextForm() :FormGroup {
    const textForm = this.fb.group({
      type: ['text'],
      data: this.fb.group({
        header: [''],
        body: ['', Validators.required],
        type: ['text']
      })
    });
    return textForm;
  }

  getMediaForm() :FormGroup {
    const mediaForm = this.fb.group({
      type: ['media'],
      data: this.fb.group({
        filename: ['', Validators.required],
        caption: ['', Validators.required],
        source: ['', Validators.required],
        uploadDate: [''],
        fileId: ['', Validators.required],
        file: ['', Validators.required],
        type: [''],
        contentType: ['']
      })
    });
    return mediaForm;
  }

  onAddTextForm() {
    const textForm = this.fb.group({
      type: ['text'],
      data: this.fb.group({
        header: [''],
        body: ['', Validators.required],
        type: ['text']
      })
    });

    this.getChunks().push(textForm);
    // console.log(this.getChunks());
  }

  onAddMediaForm() {
    const mediaForm = this.fb.group({
      type: ['media'],
      data: this.fb.group({
        filename: ['', Validators.required],
        caption: ['', Validators.required],
        source: ['', Validators.required],
        uploadDate: [''],
        fileId: ['', Validators.required],
        file: ['', Validators.required],
        type: [''],
        contentType: ['']
      })

    });

    this.getChunks().push(mediaForm);
    
  }

  onDeleteForm(index: number) {
    this.getChunks().removeAt(index);
  }

  isFileIdValid(index: number) {
    return this.form.controls.chunks.at(index).get("data")?.get("fileId")?.valid;
  }
  
  getFileId(index: number): string{
    return this.form.controls.chunks.at(index).get("data")?.get("fileId")?.value;
  }

  onFileUpload(event: any, index: number) {
    const file: File = event.target.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    const $upload = this.mediaService.uploadMedia(formData);
    $upload.subscribe(
      header => {
        console.log(header);
        this.form.controls.chunks.at(index).get("data")?.patchValue({
          fileId: header.fileId,
          filename: header.filename,
          type: header.type,
          contentType: header.contentType,
          uploadDate: Date.now().toString()
          });
          
      }
    );
  }

}
