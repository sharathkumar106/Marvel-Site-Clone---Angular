import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    baseUrl = 'http://newsapi.org/v2';
    apiKey = '69cf1e5fd82c44b59b7ab6bb0676e797';
    constructor(private httpClient: HttpClient) { }

    getMovieNews(): Observable<any> {
        const url = `${this.baseUrl}/everything?apikey=${this.apiKey}&sortBy=popularity&q=movies`;
        return this.httpClient.get(url);
    }

    getNews(): Observable<any> {
        const url = `${this.baseUrl}/top-headlines?apikey=${this.apiKey}&sortBy=popularity&category=entertainment&country=in`;
        console.log(url);
        return this.httpClient.get(url);
    }

    getMovieNewsByTitle(title: string): Observable<any> {
        const url = `${this.baseUrl}/everything?apikey=${this.apiKey}&sortBy=popularity&q=${title}`;
        console.log(url);
        return this.httpClient.get(url);
    }
}
