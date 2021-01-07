import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'joke-row',
  templateUrl: './joke-row.component.html',
  styleUrls: ['./joke-row.component.scss']
})
export class JokeRowComponent implements OnInit {

  @Input() joke: Joke;

  isShowJoke = false;

  constructor() { }

  ngOnInit() {
  }

}
