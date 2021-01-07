import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeRowComponent } from './joke-row.component';

describe('JokeRowComponent', () => {
  let component: JokeRowComponent;
  let fixture: ComponentFixture<JokeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
