import { Component } from '@angular/core'
import { BooksList } from './books/books-list/books-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [BooksList]
})
export class App {}
