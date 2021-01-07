import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'query-dashboard',
  templateUrl: './query-dashboard.component.html',
  styleUrls: ['./query-dashboard.component.scss']
})
export class QueryDashboardComponent implements OnInit {

  @Input() isDisableBtn: boolean;
  @Output() clickedSubmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  notifyClick() {
    this.clickedSubmit.emit(true);
  }

}
