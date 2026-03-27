import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  httpClient = inject(HttpClient)
  baseUrl = environment.apiUrl + '/books'
  getBooks(){
    console.log("baseUrl:", this.baseUrl)
    return this.httpClient.get(this.baseUrl)
  }
}
