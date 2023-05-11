import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/Router';

import { HomeArticleListComponent } from './components/home-article-list/home-article-list.component';
import { ArticleComponent } from './components/home-article-list/article/article.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ArticleUpdaterComponent } from './components/home-article-list/article-updater/article-updater.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { LoginFormComponent } from './components/user/login-form/login-form.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserEditPageComponent } from './components/user-edit-page/user-edit-page.component';
import { ArticleCreatorComponent } from './components/home-article-list/article-creator/article-creator.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeArticleListComponent},
  {path: 'read/:id', component: ArticleComponent},
  {path: 'create', component: ArticleCreatorComponent},
  {path: 'update/:id', component: ArticleUpdaterComponent},
  {path: 'search/:query', component: SearchPageComponent},
  {path: 'user/register', component: RegisterFormComponent},
  {path: 'user/login', component: LoginFormComponent},
  {path: 'userpage', component: UserPageComponent},
  {path: 'edit-profile/:id', component: UserEditPageComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
