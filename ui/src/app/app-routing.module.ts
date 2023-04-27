import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/Router';

import { HomeArticleListComponent } from './components/home-article-list/home-article-list.component';
import { ArticleComponent } from './components/home-article-list/article/article.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ArticleUpdaterComponent } from './components/home-article-list/article-updater/article-updater.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeArticleListComponent},
  {path: 'read/:id', component: ArticleComponent},
  {path: 'create', component: CreateFormComponent},
  {path: 'update/:id', component: ArticleUpdaterComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
