import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Joke } from '../../models/joke';

@Component({
  selector: 'random-panel',
  templateUrl: './random-panel.component.html',
  styleUrls: ['./random-panel.component.scss']
})
export class RandomPanelComponent implements OnInit {

  private name = ''
  private categories = ['All Categories'];
  private selectedCategory = '';
  private isShowJoke = false;
  private joke: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllCategories().subscribe(
      (categories: Array<string>) => this.categories = this.categories.concat(categories),
      error => console.log('Oops... an error has occured')
    );
  }

  isDisableBtn(): boolean {
    return !this.name || !this.selectedCategory;
  }

  showJoke() {
    this.isShowJoke = false;
    this.apiService.getRandomJoke(this.name, this.selectedCategory).subscribe(
      (joke: Joke) => {
        this.joke = joke.value;
        this.isShowJoke = true;
      },
      error => console.log('Oops... an error has occured')
    )
  }

}
