import { Component, inject, Signal } from '@angular/core';
import { BookService } from '../book-service';
import { signal } from '@angular/core';
import { Book } from '../books.model';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.html',
  styleUrls: ['./books-list.scss'],
  imports: [Button, Card, Tag]
})
export class BooksList {
  bookService = inject(BookService);
  books = signal<Book[]>([]);
  constructor() {
    this.bookService.getBooks().subscribe((books) => {
      console.log(books);
      this.books.set(books);
    });

}
}