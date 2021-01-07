import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPanelComponent } from './random-panel.component';

describe('RandomPanelComponent', () => {
  let component: RandomPanelComponent;
  let fixture: ComponentFixture<RandomPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
