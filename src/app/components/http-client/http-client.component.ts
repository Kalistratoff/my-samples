import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
  providers: [HttpService]
})
export class HttpClientComponent implements OnInit {

  strictPosts: Post[];
  posts: any[];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getStrictPosts();
    // this.getPosts();
  }

  getStrictPosts() {
    this._http.getStrictPosts()
      .subscribe(
      posts => { this.strictPosts = posts; },
      err => {
        console.log('Something went wrong!');
        console.log(err);
      }
      )
  }

  getPostById(postId: number) {

    this._http.getPostById(postId)
      .subscribe((post) => {
        console.log("POST => ");
        console.log(post);
      })
  }

  addNewPost(): void {
    let newPost: Post = {
      userId: 1,
      id: 777,
      title: "New Post",
      body: "The best Post In The World"
    };

    this._http.addPost(newPost)
      .subscribe((response) => {
        console.log('addPost response');
        console.log(response);
      })
  }

  // getPosts() {
  //   this._http.getPosts()
  //     .subscribe((posts) => {
  //       this.posts = posts;
  //     })
  // }
}
