import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/retry';

import { Post } from '../models/post.model';

@Injectable()
export class HttpService {

    postsUrl = 'https://jsonplaceholder.typicode.com/posts1';

    constructor(
        private http: HttpClient
    ) { }

    getStrictPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl)
            .retry(3)
            .pipe(catchError(this.handleError('getStrictPosts', [])));
    }

    getPosts(): Observable<any> {
        return this.http.get(this.postsUrl)
            .retry(3)
            .pipe(catchError(this.handleError('getPosts', [])));
    }

    getPostById(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.postsUrl}/${id}`)
            .retry(3)
            .pipe(
                catchError(this.handleError('getPosts', null))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.log(`handleError catched ${operation}`);
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}