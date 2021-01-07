import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input() joke: string;
  @Input() backgroundColor: string;
  
  constructor() { }

  ngOnInit() {
  }

}
