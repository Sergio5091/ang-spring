import { Component, inject } from '@angular/core';
import { BookService } from '../book-service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss',
})
export class BooksList {
  bookService = inject(BookService)
  books = toSignal(this.bookService.getBooks(), { initialValue: [] })

  constructor() {
    
    console.log("this.books:", this.books());
  }


}
