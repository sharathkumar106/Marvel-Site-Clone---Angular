import { OMDBMovie } from './../../models/omdb.model';
import { MovieService } from './../../services/movie.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  movies: OMDBMovie[];
  search: string;
  page = 1;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.search = routeParams.search;
      if (!this.search) {
        this.search = 'Avengers';
      }
      this.loadMovies(this.search);
    });
  }

  loadMovies(key: string): void {
    this.movieService.getMovies(key, this.page).subscribe(response => {
      this.movies = response.Search;
    });
  }

  paginate(direction: number): void {
    this.page += direction;
    this.loadMovies(this.search);
  }

  gotoPage(page: number): void {
    this.page = page;
    this.loadMovies(this.search);
  }

}
