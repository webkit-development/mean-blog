import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { CommentListComponent } from './components/comment/comment-list/comment-list.component';
import { CommentCreateComponent } from './components/comment/comment-create/comment-create.component';
import { CommentReviewComponent } from './components/comment/comment-review/comment-review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import {UserService} from "./services/user.service";
import {PostService} from "./services/post.service";
import {CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    CommentListComponent,
    CommentCreateComponent,
    CommentReviewComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
