import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private appState = AppState.RANDOM;
  quote: string;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getNavigationBtnClass(state: string): string {
    let classStr = "navigation__btn";
    if(state === this.appState){
      classStr += " navigation__btn--active";
    }
    return classStr;
  }

    

}

enum AppState {
  RANDOM = 'RANDOM',
  SEARCH = 'SEARCH'
} 
