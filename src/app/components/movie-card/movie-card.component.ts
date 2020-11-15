import { OMDBMovie } from './../../models/omdb.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: OMDBMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
