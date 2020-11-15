import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Movie App';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchMovies(search: string): void {
    this.router.navigate(['movies', search]);
  }
}
