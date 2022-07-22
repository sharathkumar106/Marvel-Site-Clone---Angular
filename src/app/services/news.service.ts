import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl = 'http://newsapi.org/v2';
  apiKey = 'YOUR_API_KEY';
  constructor() {}

  getMovieNews(): Promise<Response> {
    const url = `assets/mock/movie-articles.json`;
    return fetch(url);
  }

  getNews(): Promise<Response> {
    const url = `assets/mock/news.json`;
    return fetch(url);
  }

  getMovieNewsByTitle(title: string): Promise<Response> {
    const url = `assets/mock/movie-news-by-title.json`;
    return fetch(url);
  }
}
