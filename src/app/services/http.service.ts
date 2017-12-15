import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable()
export class HttpService {

    postsUrl = 'https://jsonplaceholder.typicode.com/posts1';

    constructor(
       private http: HttpClient
    ) { }

    getStrictPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl);
    }

    getPosts(): Observable<any> {
        return this.http.get(this.postsUrl);
    }
}