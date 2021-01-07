import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  randomURL = 'https://api.chucknorris.io/jokes/random';
  categoriesURL = 'https://api.chucknorris.io/jokes/categories';
  searchURL = 'https://api.chucknorris.io/jokes/search';

  constructor(private http: HttpClient) { }

  getRandomJoke(name: string, category: string) {
    return this.http.get(`${this.randomURL}?name=${name}&category=${category}`);
  }

  getAllCategories() {
    return this.http.get(this.categoriesURL);
  }
  
  getSearchResults(query: string): Observable<Array<Joke>>{
    return this.http.get(`${this.searchURL}?query=${query}`).pipe(map(this.mapResponseToJokes));
  }

  private mapResponseToJokes(response): Array<Joke> {
    return response.result.map(jokeResponse  => {
      return {
        id: jokeResponse.id,
        categories: jokeResponse.categories.toString(),
        createdDate: jokeResponse.created_at,
        value: jokeResponse.value,
      }
    });
  }

}
