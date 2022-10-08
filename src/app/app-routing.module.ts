import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./components/post/post-list/post-list.component";
import {PostCreateComponent} from "./components/post/post-create/post-create.component";
import {CommentListComponent} from "./components/comment/comment-list/comment-list.component";
import {CommentCreateComponent} from "./components/comment/comment-create/comment-create.component";
import {CommentReviewComponent} from "./components/comment/comment-review/comment-review.component";
import {UserLoginComponent} from "./components/user/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user/user-register/user-register.component";

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent},
  {path: 'comments', component: CommentListComponent},
  {path: 'comments/create', component: CommentCreateComponent},
  {path: 'comments/review/:userId', component: CommentReviewComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
