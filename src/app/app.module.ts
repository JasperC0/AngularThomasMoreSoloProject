import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesModule } from './articles/articles.module'
import { TagsModule } from './tags/tags.module'
import { ArticlesService } from './articles/articles.service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './Security/interceptor';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module'
import { RegisterService } from './register/register.service';
import { TagsComponent } from './tags/tags.component';
import { AddJournalistModule } from './add-journalist/add-journalist.module';
import { AddJournalistComponent } from './add-journalist/add-journalist.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticleModule } from './edit-article/edit-article.module';
import { DeleteJournalistComponent } from './delete-journalist/delete-journalist.component';
import { DeleteJournalistModule } from './delete-journalist/delete-journalist.module';
import { PublishArticleComponent } from './publish-article/publish-article.component';
import { PublishArticleModule } from './publish-article/publish-article.module';

localStorage.setItem("role", "0") 

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article-detail', component: ArticleDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'add-journalist', component: AddJournalistComponent },
  { path: 'edit-article', component: EditArticleComponent },
  { path: 'delete-journalist', component: DeleteJournalistComponent },
  { path: 'publish-article', component: PublishArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NoopAnimationsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    ArticlesModule,
    RegisterModule,
    LoginModule,
    TagsModule,
    AddJournalistModule,
    EditArticleModule,
    DeleteJournalistModule,
    PublishArticleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
