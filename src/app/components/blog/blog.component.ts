import { NewsService } from './../../services/news.service';
import { NewsArticle } from './../../models/news.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles: NewsArticle[];
  movieArticles: NewsArticle[];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.newsService.getNews().then((response) => {
      response.json().then((res) => {
        this.articles = res.articles;
      });
    });
    this.newsService.getMovieNews().then((response) => {
      response.json().then((res) => {
        this.movieArticles = res.articles;
      });
    });
  }
}
