import { NewsArticle } from './../../models/news.model';
import { NewsService } from './../../services/news.service';
import { Trailers } from './../../models/youtube.model';
import { YoutubeService } from './../../services/youtube.service';
import { OMDBMovie } from './../../models/omdb.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: OMDBMovie;
  trailers: Trailers[];
  movieArticles: NewsArticle[];
  trailerExists = false;

  constructor(
    private movieService: MovieService,
    private youtubeService: YoutubeService,
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe((response) => {
      this.movie = response;
      this.loadTrailers();
      this.loadNews(this.movie.Title);
    });
  }

  loadTrailers(): void {
    this.youtubeService.getTrailer(this.movie.Title).subscribe((res) => {
      if (res.items.length > 0) {
        this.trailers = res.items;
        this.trailerExists = true;
      }
    });
  }

  loadNews(title: string): void {
    this.newsService.getMovieNewsByTitle(title).then((response) => {
      response.json().then((res) => {
        this.movieArticles = res.articles;
      });
    });
  }

  getTrailerLink(index: number): string {
    return `https://www.youtube.com/embed/${this.trailers[index].id.videoId}`;
  }
}
