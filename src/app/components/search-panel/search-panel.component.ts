import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Joke } from '../../models/joke';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  keywords = '';
  jokes: Array<Joke>;
  sortedBy = 'id';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  showJokesList() {
    this.apiService.getSearchResults(this.keywords).subscribe(
      (jokesList: Array<Joke>) => {
        this.jokes = jokesList;
        this.sortBy('id');
      },
      error => console.log('Oops... an error has occured')
      )
  }

  sortBy(property: string) {
    const comapre = (a: Joke, b: Joke) => {
      return a[property].localeCompare(b[property]);
    }
    this.jokes.sort(comapre);
    this.sortedBy = property;
  }

}
