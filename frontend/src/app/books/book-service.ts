import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development';
import { Book } from './books.model';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  httpClient = inject(HttpClient)
  baseUrl = environment.apiUrl + '/books'
  getBooks(){
    console.log(this.baseUrl)
    return this.httpClient.get<Book[]>(this.baseUrl)
  }
}
