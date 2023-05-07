import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { ArticleComponent } from './components/home-article-list/article/article.component';
import { HomeArticleListComponent } from './components/home-article-list/home-article-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArticleUpdaterComponent } from './components/home-article-list/article-updater/article-updater.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RegisterFormComponent } from './components/user/register-form/register-form.component';
import { UserComponent } from './components/user/user.component';
import { LoginFormComponent } from './components/user/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeArticleListComponent,
    PageNotFoundComponent,
    ArticleUpdaterComponent,
    CreateFormComponent,
    SearchPageComponent,
    UserComponent,
    RegisterFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
