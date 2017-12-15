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
    this.getPosts();
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

  getPosts() {
    this._http.getPosts()
      .subscribe((posts) => {
        this.posts = posts;
      })
  }
}
